import employeeModel from "../models/Empleados.js"
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import { config } from "../config.js"


const registerEmployeesController = {};

registerEmployeesController.register = async(req,res) => {
    const {
        name,
    lastname,
    birthday,
    email,
    hireDate,
    password,
    telephone,
    dui,
    isssNumber,
    isVerified} = req.body;


    try {

        //verificamos si el empleado existe
        const existEmployee = await employeeModel.findOne({email})
        if (existEmployee){
            return res.json({message: "Employee alredy exist"})

        }

        const passwordHash = await bcryptjs.hash(password,10)

        const newEmployee = new employeeModel({
            name,
            lastname,
            birthday,
            email,
            hireDate,
            password : passwordHash,
            telephone,
            dui,
            isssNumber,
            isVerified})

        newEmployee.save();


        jsonwebtoken.sign(
            {id: newEmployee._id},

            config.JWT.secret,

            {expires:config.JWT.expiresIn},

            (error,token)=>{
                if(error) console.log("error"+ error)
    
                    res.cookie("authToken", token)
                    res.json({message : "empleado guardado"})
            }
        )

       

    }catch(error){
        console.log("error"+error)
        res.json({message : "Error savifg employee"})

    }

    
}

export default registerEmployeesController;