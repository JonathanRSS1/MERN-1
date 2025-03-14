const sucursalesController = {};
import sucursalesModel from "../models/Sucursales.js"

//SELECT
sucursalesController.getSucursales = async (req, res) =>{
    const sucursales = await sucursalesModel.find();
    res.json(sucursales);
};

//INSERT
sucursalesController.createSucursales = async (req, res) =>{
    const {name, address, telephone, schedule} = req.body;

    const newSucursal = new sucursalesModel({name, address, telephone, schedule })

    await newSucursal.save()
    res.json({message: "Sucursal Guardada"})
};

//DELETE
sucursalesController.deleteSucursales = async (req, res) => {
    const deleteSucursal = await sucursalesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Sucursal elminada"});
};

//UPDATE
sucursalesController.updateSucursales = async (req, res) => {
    const{name, address, telephone, schedule} = req.body
    const updateSucursales = await sucursalesModel.findByIdAndUpdate(
        req.params.id,
        { name, address, telephone, schedule },
        { new: true}
    )
}
//SELECT SUCURSAL BY ID
sucursalesController.getSucursal = async (req, res) =>{
    const sucursal = await sucursalesModel.findById(req.params.id);
    res.json(sucursal);
}

export default sucursalesController;