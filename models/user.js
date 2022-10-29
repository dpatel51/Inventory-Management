const mongoose=require('mongoose')
const {isEmail}=require('validator')
const bcrypt=require('bcrypt')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate:[isEmail,'Pls enter valid email']

    },
    password:{
        type:String,
        required:true,
        minlength:[6,'Minimum password length is 6 character']
    }
})



// hashing password
userSchema.pre('save',async function(next){
    console.log('encrypting password')
    const salt= await bcrypt.genSalt()
    this.password=await bcrypt.hash(this.password,salt)
    next() 
})

// login method
userSchema.statics.login=async function(email,password){
    const user=await this.findOne({email})  //'this' refer to model 'User'
    console.log("user")
    console.log(user)
    if(user){
        const auth=await bcrypt.compare(password,user.password)
        console.log("password checking")
        console.log(auth)
        if(auth){
            return user
        }
        throw Error('Incorrect password')
    }
    throw Error('Incorrect email')

}


const User=mongoose.model('user',userSchema)

module.exports=User
