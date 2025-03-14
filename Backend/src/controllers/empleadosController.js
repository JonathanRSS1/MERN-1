const empleadosController = {};
import empleadosModel from "../models/Empleados.js";

//SELECT
empleadosController.getEmpleados = async (req, res) => {
    const empleados = await empleadosModel.find();
    res.json(empleados);
};

//INSERT
empleadosController.createEmpleados = async (req, res) => {
    const {name, lastname, birthday, email, hireDate, password, telephone, dui, isssNumber, isVerified } = req.body;

    const newEmpleado = new empleadosModel({name, lastname, birthday, email, hireDate, password, telephone, dui, isssNumber, isVerified});

    await newEmpleado.save()
    res.json({message: "Empleado Guardado"})
};

//DELETE
empleadosController.deleteEmpleados = async (req, res) => {
    const deleteCliente = await empleadosModel.findByIdAndDelete(req.params.id)
    res.json({message: "Empleado eliminado"});
};

//UPDATE
empleadosController.updateEmpleados = async (req, res) =>{
    const {name, lastname, birthday, email, hireDate, password, telephone, dui, isssNumber, isVerified } = req.body;
    const updateEmpleados = await empleadosModel.findByIdAndUpdate(
        req.params.id,
        { name, lastname, birthday, email, hireDate, password, telephone, dui, isssNumber, isVerified },
        { new: true }
    )

    res.json({message: "Empleado actualizado"})
};

//SELECT EMPLEADO BY ID

empleadosController.getEmpleado = async (req, res) => {
    const empleado = await empleadosModel.findById(req.params.id);
    res.json(empleado);
}

export default empleadosController;