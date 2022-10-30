const User=require('../models/User')

const sales =require('../models/sales')

// methods for managing sales




//USE ONLY AFTER SALES SCHEMA IS DONE




// get all sales
module.exports.getSales=async(req,res)=>{
    try{
        const salesdata=await sales.find(); 
        if(salesdata){
        console.log(salesdata);
        res.locals.sales=salesdata
        }
        res.render('sales')
    }catch(err){
        res.json({message:err})
    }
}

// add a sale

module.exports.addSale=async(req,res)=>{

    const salew=new sales({  
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    })
    console.log(salew);
    try{
        const savedSale=await salew.save()
        console.log("Added Sale Successfully");
        res.json(savedSale)
    }catch(err){
        res.json({message:err})
    }
}

