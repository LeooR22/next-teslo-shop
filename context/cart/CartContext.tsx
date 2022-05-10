import { createContext } from "react";
import { ICartProduct, ShippingAddress } from "../../interfaces";

interface ContextProps {
  isLoaded: boolean;
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;

  shippingAddress?: ShippingAddress;

  updateAddress: (address: ShippingAddress) => void;
  addProductToCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;
  removeCartProduct: (product: ICartProduct) => void;

  //orders
  createOrder: () => Promise<{
    hasError: boolean;
    message: string;
  }>;
}

export const CartContext = createContext({} as ContextProps);
