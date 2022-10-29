const User=require('../models/User')
const jwt=require('jsonwebtoken')

const handleErrors=(err)=>{
    // console.log(err.errors)
    console.log(err.message,err.code)
    // error.code is for uniqueness if no duplicacy is there then it will be undefined
    // console.log(err.errors)
    let errors={email:'',password:''}

    //incorrect email
    if(err.message==='Incorrect email'){
        errors.email='Incorrect email'
    }
    //incorrect password
    if(err.message==='Incorrect password'){
        errors.password='Incorrect password'
    }

    // for duplicate email
    if(err.code===11000){
        errors.email='This email is already registered'
        return errors
    }

    if(err.message.includes('user validation failed')){
       const myarray=Object.values(err.errors)
    //    console.log(myarray)
       myarray.forEach(({properties}) => {
        errors[properties.path]=properties.message
       });
    }
    return errors
}

//expiration time
const maxAge=3*24*60*60 // 3 days (in sec)

// create token
const createToken=(id)=>{
    return jwt.sign({ id },'this is my secret key',{
        expiresIn:maxAge
    })
}
module.exports.signup_get=(req,res)=>{
    res.render('signup')
}
module.exports.signup_post=(req,res)=>{
    const {name,email,password}=req.body
    console.log(name)
    console.log(email)
    
    const data=new User({
        name:req.body.name,
       email:req.body.email,
       password:req.body.password
    })
        data.save().then((result)=>{
            console.log("inside save")
            const token=createToken(result._id)
            res.cookie('jwt',token,{httpOnly:true, maxAge:maxAge*1000})
            console.log('user created')
            res.status(201).json({user:result._id})
        }).catch((err)=>{
            const errors=handleErrors(err);
            res.status(400).json({errors})
        })  
}
module.exports.login_get=(req,res)=>{
    res.render('login')
}
module.exports.login_post=async (req,res)=>{
    const {name,email,password}=req.body
    try {
        const user=await User.login(email,password)
        const token=createToken(user._id)
        res.cookie('jwt',token,{httpOnly:true, maxAge:maxAge*1000})
        res.status(200).json({user:user._id})

    } catch (error) {
        const errors=handleErrors(error)
        res.status(400).json({errors})
    }
}

module.exports.logout_get=(req,res)=>{
    res.cookie('jwt','',{maxAge:1})
    res.redirect('/login')
}
 