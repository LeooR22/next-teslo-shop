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

## Screenshots


![teslo-9](https://user-images.githubusercontent.com/55930935/184144800-9c4f086d-90ea-49c1-8e27-dc2d4b09ca91.png)
![teslo-8](https://user-images.githubusercontent.com/55930935/184144846-a36daefc-8ec9-480f-a694-bd60226f8bff.png)
![teslo-6](https://user-images.githubusercontent.com/55930935/184144884-df8073c7-460b-469b-bded-31a7a7c15653.png)
![teslo-4](https://user-images.githubusercontent.com/55930935/184144914-dfdef522-e5fd-4172-a2af-0e199417f9d2.png)![teslo-2](https://user-images.githubusercontent.com/55930935/184145063-bf7a1a32-4e10-4883-8c1b-b7c9ad3df32a.png)

