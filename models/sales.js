const mongoose=require('mongoose')


// sales 
const salesSchema=new mongoose.Schema({
    // id:{
    //     type:Number,
    //     required:true,
    //     unique:true
    // },
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
    date:{
        type:Date,
        default:Date.now
        
    }
 
})

const Sales = mongoose.model('sales',salesSchema)

module.exports = Sales