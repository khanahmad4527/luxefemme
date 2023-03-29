const mongoose=require("mongoose");

//temporary model
//it will be updated later
const productSchema=mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    size:{type:String,required:true}
})


const ProductModel=mongoose.model("product",productSchema);
module.exports=ProductModel;