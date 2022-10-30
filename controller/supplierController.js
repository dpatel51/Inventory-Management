const User=require('../models/User')
const supplier =require('../models/supplier')

// methods for managing suppliers

// get all suppliers
module.exports.getSuppliers=async(req,res)=>{
    console.log('aa');
    try{
         console.log('bb');
        const suppliers=await supplier.find(); 
        if(suppliers){
        console.log(suppliers);

        res.json(suppliers);
        // res.locals.suppliers=suppliers
        }
        // res.render('suppliers')
    }catch(err){
        console.log('ccc');
        res.json({message:err})
    }
    console.log('dd');
}

// get a specific supplier
module.exports.getSupplier=async(req,res)=>{
        
        try{ 
            const supplierdata =await supplier.findById(req.params.supplierId); 
            res.json(supplierdata)
        }catch(err){
            console.log({message:err});
            res.json({message:err}) 
        } 
    }

// add a supplier 

module.exports.addSupplier=async(req,res)=>{

    const supplierw=new supplier({  
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    })
    console.log(supplierw);
    try{
        const savedSupplier=await supplierw.save()
        console.log("Added Supplier Successfully");
        res.json(savedSupplier)
    }catch(err){
        res.json({message:err})
    }
}

// for rendering page
module.exports.getAddSupplier=async(req,res)=>{

    res.render('addSupplier')
}

// update a supplier
module.exports.updateSupplier=async(req,res)=>{
    try{
        const updatedSupplier=await supplier.updateOne(
            {_id:req.params.supplierId},
            {$set:{name:req.body.name,address:req.body.address,phone:req.body.phone}}
        )
        res.json(updatedSupplier)
    }catch(err){
        res.json({message:err})
    }
}

// delete a supplier
module.exports.deleteSupplier=async(req,res)=>{
    try{
        const removedSupplier=await supplier.remove({_id:req.params.supplierId})
        res.json(removedSupplier)
    }catch(err){
        res.json({message:err})
    }
}

