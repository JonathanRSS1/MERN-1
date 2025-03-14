// importo la libreria dotenv 
import dotenv from "dotenv";


//Ejecuto "Dotenv"
dotenv.config();

export const config = {
    db:{
        URI: process.env.DB_URI || "mongodb://localhost:27017/ZonaDigitalDB20230174",
    },
    server:{
        port: process.env.PORT || 4000,
    }
}