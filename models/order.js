const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    }, 

    products:[{
        product:{
            type:mongoose.Types.ObjectId,
            ref:'product'
        },
        quantity:{
            type:Number,
            required:true
        }
    }], 

    // products:{
    //     type:Array,
    //     required:true
    // },

    // product:{
    //     type:String,
    //     required:true
    // }, 
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        default:'pending'
    }
})

const Order=mongoose.model('order',orderSchema)


module.exports=Order