/*Campos:
name
lastname
birthday
email
hireDate
password
telephone
dui
isssNumber
isVerified (bool) 
*/

import { Schema, Model, model } from "mongoose";

const empleadosSchema = new Schema(
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
        hireDate: {
            type: Date
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
        isssNumber:{
            type: String,
            require: true
        }
        ,isVerified:{
            type: Boolean
        }
    }
)

export default model("Empleado", empleadosSchema);