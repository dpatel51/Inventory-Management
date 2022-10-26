const User=require('../models/User')
const product =require('../models/product')

// methods for managing products

// get all products
exports.getProducts=async(req,res)=>{
    try{
        const products=await product.find()
        res.json(products)
    }catch(err){
        res.json({message:err})
    }
}

// get a specific product
exports.getProduct=async(req,res)=>{
    try{
        const product=await product.findById(req.params.productId)
        res.json(product)
    }catch(err){
        res.json({message:err})
    }
}

// add a product
exports.addProduct=async(req,res)=>{
    const product=new product({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    })
    try{
        const savedProduct=await product.save()
        res.json(savedProduct)
    }catch(err){
        res.json({message:err})
    }
}

// update a product
exports.updateProduct=async(req,res)=>{

    try{
        const updatedProduct=await product.updateOne(
            {_id:req.params.productId},
            {$set:{name:req.body.name,price:req.body.price,description:req.body.description}}
        )
        res.json(updatedProduct)
    }catch(err){
        res.json({message:err})
    }
}

// delete a product
exports.deleteProduct=async(req,res)=>{
    try{
        const removedProduct=await product.remove({_id:req.params.productId})
        res.json(removedProduct)
    }catch(err){
        res.json({message:err})
    }
}

