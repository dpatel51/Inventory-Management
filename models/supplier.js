const mongoose=require('mongoose')

const supplierSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,

    }, 
})

const Supplier=mongoose.model('supplier',supplierSchema)

module.exports=Supplier
