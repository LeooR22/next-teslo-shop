# Next.js Teslo Shop App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- el -d, significa **detached**

- MongoDB URL Local:

```
mongodb://localhost:27017/teslodb
```

- Reconstruir los modulos de node

```
npm install
npm run dev
```

## Configurar las variables de entorno

Renombar el archivo **.env.template** a **.env**

## Llenar la base de datos con informacion de pruebas

llamara:

```
http://localhost:3000/api/seed
```
