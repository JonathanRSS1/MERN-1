// 1- importo todo lo de la libreria de express 
import express from "express";
import cookieParser from "cookie-parser";

import productRoutes from "./src/routes/products.js"
import clientesRoutes from "./src/routes/clientes.js";
import empleadosRoutes from "./src/routes/empleados.js";
import sucursalesRoutes from "./src/routes/sucursales.js";
import reviewsRoutes from "./src/routes/reviews.js";
import registerEmployees from "./src/routes/registerEmployees.js"

// 2- Creo un a constante que es igual a la libreria que imorte
const app = express();

app.use(express.json());

app.use(cookieParser())

// Definimos las rutas de las funciones que tendra la pagina web 
app.use("/api/products",productRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/empleados",empleadosRoutes);
app.use("/api/sucursales",sucursalesRoutes);
app.use("/api/reviews",reviewsRoutes);
app.use("/api/registerEmployees", registerEmployees)


// 3- Exporto la constante para poder usar express en otros archivos 
export default app;