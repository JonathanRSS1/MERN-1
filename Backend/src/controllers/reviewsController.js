const reviewsController ={};

import reviewModel from "../models/Review.js"

//Select 
reviewsController.getReviews = async (req,res) => {
    const reviews = await reviewModel.find().populate('idCliente')
    res.json(reviews)
}


//Insert 
reviewsController.createReviews = async(req,res) =>{
    const {comment, rating, idCliente }  = req.body;
    const newReview = new reviewModel({
        comment, rating, idCliente 
    })
    await newReview.save()
    res.json({message: "product saved"})
};

//Drop
reviewsController.deleteReview = async (req,res )=>{
    await reviewModel.findOneAndDelete(req.params.id)
    res.json({message: "Reiew is del"})
};


//Update
reviewsController.updateReviews = async (req,res) => 
    {
        const {comment, rating, idCliente } = req.body;
        await reviewModel.findByIdAndUpdate(req.params.id,{
            comment, 
            rating, 
            idCliente 
        }, {new: true});
    
    res.json({message: "Update re"})
    };
    


export default reviewsController;
//update

