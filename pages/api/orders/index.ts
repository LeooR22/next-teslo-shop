import type { NextApiRequest, NextApiResponse } from "next";
import { IOrder } from "../../../interfaces";
import { getSession } from "next-auth/react";
import { db } from "../../../database";
import { Order, Product } from "../../../models";

type Data = { message: string } | IOrder;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return createOrder(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}
const createOrder = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { orderItems, total } = req.body as IOrder;

  // verificar que tengamos un usuario
  const session: any = await getSession({ req });

  if (!session) {
    return res
      .status(401)
      .json({ message: "Debe de estar autenticado para hacer esto" });
  }

  // Crear un arreglo con los productos que la persona quiere
  const productsIds = orderItems.map((p) => p._id);
  await db.connect();

  const dbProudcts = await Product.find({ _id: { $in: productsIds } });

  try {
    const subTotal = orderItems.reduce((prev, curr) => {
      const currentPrice = dbProudcts.find((p) => p.id === curr._id)?.price;
      if (!currentPrice) {
        throw new Error("Verfique el carrito de nuevo, producto no existe");
      }

      return currentPrice * curr.quantity + prev;
    }, 0);

    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

    const backendTotal = subTotal * (taxRate + 1);

    if (total !== backendTotal) {
      throw new Error("El total no cuadra con el monto");
    }

    // Todo bien hasta este punto
    const userId = session.user._id;
    console.log(req.body);
    const newOrder = new Order({
      ...req.body,
      //   image: req.body.
      isPaid: false,
      user: userId,
    });
    await newOrder.save();
    await db.disconnect();

    res.status(201).json(newOrder);
  } catch (error: any) {
    await db.disconnect();
    console.log(error);
    res.status(400).json({
      message: error.message || "Revise los logs del servidor",
    });
  }

  return res.status(201).json(session);
};
