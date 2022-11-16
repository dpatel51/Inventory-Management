const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    pur_price:{
        type:Number,
        required:true

    },
    sell_price:{
        type:Number,
        required:true

    },
    description:{
        type:String,
    },
    quantity:{
        type:Number,
        required:true
    }, 
    low_warn:{
        type:Number,
        required:true
    }
   
})

const Product=mongoose.model('product',productSchema)

module.exports=Product