// 1- importo todo lo de la libreria de express 
import express from "express";

// 2- Creo un a constante que es igual a la libreria que imorte
const app = express();


// Definimos las rutas de las funciones que tendra la pagina web 
app.use("api/products")

// 3- Exporto la constante para poder usar express en otros archivos 
export default app;