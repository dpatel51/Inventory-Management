const mongoose=require('mongoose')


const productSchema=new mongoose.Schema({

    id:{
        type:Number,
        required:true,
        unique:true
    },

    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true

    },
    description:{
        type:String,
    },
    image:{
        type:String,
    },
    // quantity:{
    //     type:Number,
    //     required:true
    // }, 
})

const Product=mongoose.model('product',productSchema)

module.exports=Product