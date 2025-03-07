//ARRAY de metodos (C R U D)
const productsController = {};

import productsModels from "../models/Products.js";

//Select 

productsController.getProducts = async(req,res) =>{
    const products = await productsModels.find()
    res.json(products)
};

//Insert 

productsController.createProducts = async(req,res) =>{
    const {name, description, price, stock }  = req.body;
    const newProduct = new productsModels({
        name, description, price, stock
    })
    await newProduct.save()
    res.json({message: "product saved"})
};


//Eliminar 
productsController.deleteProducts = async (req,res )=>{
    await productsModel.findOneAndDelete(req.params.id)
    res.json({message: "PRODUCT DELETED"})
};

//Update 
productsController.updateProducts = async (req,res) => 
{
    const {name, description, price, stock} = req.body;
    await productsModels.findByIdAndUpdate(req.params.id,{
        name, 
        description, 
        price, 
        stock
    }, {new: true});

res.json({message: "product update"})
};

export default productsController;
