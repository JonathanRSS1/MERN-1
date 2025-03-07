// 1- importo todo lo de la libreria de express 
import express from "express";

import productRoutes from "./src/routes/products.js"

// 2- Creo un a constante que es igual a la libreria que imorte
const app = express();

app.use(express.json());

// Definimos las rutas de las funciones que tendra la pagina web 
app.use("/api/products",productRoutes);

// 3- Exporto la constante para poder usar express en otros archivos 
export default app;