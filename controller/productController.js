const User=require('../models/User')
const product =require('../models/product')

// methods for managing products

// get all products //done
module.exports.getProducts=async(req,res)=>{
    try{
        const products=await product.find(); 
        if(products){
        console.log(products);
        res.locals.products=products
        }
        res.render('products')
    }catch(err){
        res.json({message:err})
    }
}

// get a specific product //done
module.exports.getProduct=async(req,res)=>{
    
    try{ 
        const productdata =await product.findById(req.params.productId); 
        res.json(productdata)
    }catch(err){
        console.log({message:err});
        res.json({message:err}) 
    } 
}

// add a product // done
module.exports.addProduct=async(req,res)=>{

    const productw=new product({  
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    })
    try{
        const savedProduct=await productw.save()
        res.json(savedProduct)
    }catch(err){
        res.json({message:err})
    }
}

// update a product //done
module.exports.updateProduct=async(req,res)=>{

    try{
        const updatedProduct=await product.updateOne(
            {_id:req.params.productId},
            {$set:{name:req.body.name,price:req.body.price,description:req.body.description}}
        )
        console.log(updatedProduct);
        res.json(updatedProduct)
    }catch(err){
        console.log(err);
        res.json({message:err})
    }
}

// delete a product //done
module.exports.deleteProduct=async(req,res)=>{
    try{
        const removedProduct=await product.remove({_id:req.params.productId})
        res.json(removedProduct)
    }catch(err){
        res.json({message:err})
    }
}

