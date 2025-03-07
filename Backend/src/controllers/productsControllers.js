//ARRAY de metodos (C R U D)
const productsController = {};

import productsModels from "../models/Products";

//Select 

productsController.getProducts = async(req,res) =>{
    const products = await productsModels.find()
    res.json(products)
}

//Insert 

productsController.createProducts = async(req,res) =>{
    const {name, description, price, stock }  = req.body;
    const newProduct = new productsModels({
        name, description, price, stock
    })
    await newProduct.save()
}


//
