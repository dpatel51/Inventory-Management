const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:[6,'Minimum password length is 6 character']
    }
})

const User=mongoose.model('user',userSchema)

module.exports=User
