/*Campos:
name
lastname
birthday (date o String)
email
password
telephone
dui
isVerified */

import { Schema , model } from "mongoose";

const clientesSchema = new Schema (
    {
        name: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        birthday: {
            type: Date
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        telephone: {
            type: String,
            require: true
        },
        dui: {
            type: String,
            require: true
        },
        isVerified:{
            type: Boolean
        }
    }
);

export default model("Cliente", clientesSchema);

