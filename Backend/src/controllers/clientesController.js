const clientesController = {};
import clientesModel from "../models/Clientes.js";


//SELECT 
clientesController.getClientes = async (req, res) => {
        const clientes = await clientesModel.find();
        res.json(clientes);
};

//INSERT
clientesController.createClientes = async (req, res) => {
    const {name, lastname, birthday, email, password, telephone, dui, isVerified } = req.body;

    const newCliente = new clientesModel({name, lastname, birthday, email, password, telephone, dui, isVerified});

    await newCliente.save()
    res.json({message: "Cliente guardado"});
};

//DELETE 
clientesController.deleteClientes = async (req, res) => {
    const deleteCliente = await clientesModel.findByIdAndDelete(req.params.id);
    res.json({message: "Cliente eliminado"});
};

//UPDATE

clientesController.updateClientes = async (req, res) => {
    const {name, lastname, birthday, email, password, telephone, dui, isVerified } = req.body;
    const updatedCliente = await clientesModel.findByIdAndUpdate(
        req.params.id,
        { name, lastname, birthday, email, password, telephone, dui, isVerified },
        { new: true }
    )
    
    res.json({message: "Cliente actualizado"})
};

//SELECT CLIENTE BY ID

clientesController.getCliente = async (req, res) => {
    const cliente = await productsModel.findById(req.params.id);
    res.json(cliente);
};

export default clientesController;