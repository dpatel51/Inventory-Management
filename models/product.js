const mongoose=require('mongoose')


const productSchema=new mongoose.Schema({

    // _id:{
    //     type:mongoose.Types.ObjectId,
    //     required:true,
    //     unique:true,
    //     default: new mongoose.Types.ObjectId()
    // },

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