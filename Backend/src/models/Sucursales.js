/*Campos:
name
address
telephone
schedule*/

import { Schema, model } from "mongoose";

const sucursalesSchema = new Schema (
    {
        name: {
            type: String,
            require: true
        },
        address:{
            type: String,
            require: true
        },
        telephone:{
            type: String
        },
        schedule: {
            type: String,
            require: true
        }
    }
);

export default model("Sucursal", sucursalesSchema);