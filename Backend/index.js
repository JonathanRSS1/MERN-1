
// importo el archivo app.js
import app from "./app.js";
import dotenv from "dotenv"
import { config } from "./src/config.js";
import "./database.js"

dotenv.config();


//Creo una funcion que se encarga de ejecutar el servidor
async function main() {
    //const port = 4000;
    app.listen(config.server.port);
    console.log("Server on port " + config.server.port)
}


//ejecutamos todo 
main();