import mongoose from "mongoose";
import dotenv from "dotenv";
import { config } from "./src/config.js";

dotenv.config();

// 1 - Configuro la URI o direccion de la base datos 
//-const URI = "mongodb://localhost:27017/ZonaDigitalDB20230174";

// 2 - Conecto la base de datos 
mongoose.connect(config.db.URI);

// 3 - Comprobar todo 
//Creo una constante que es igual a la conexion 
const connection = mongoose.connection;

//Veo si funciona 
connection.once("open", () => {
    console.log("DB is connected")
});

//veo si esta desconectada
connection.on("disconnected", () => {
    console.log("DB is disconnected")
});

//veo si da error
connection.on("error", (error) => {
    console.log("error found" + error)
});