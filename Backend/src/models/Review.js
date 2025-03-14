/*
  Campos :
     Comment
     Rating
     idCliente
*/


import { Schema,SchemaType,Types,model } from "mongoose";

const reviewSchema = new Schema({
    comment:{
        type :String,
        require: true
    },
    rating :{
        type: Number,
        require:true,
        max:5
    },
    idCliente:{
        type:Schema.Types.ObjectId,
        ref:"Cliente",
        require:true
    }
},{
    timestamps:true,
    strict:false
})

export default model ("Reviews", reviewSchema);