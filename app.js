const express=require('express')
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const app=express();
const authRoutes=require('./routes/authRoutes')
const {requireAuth,checkUser}=require('./middleware/authMiddleware')
const product =require('./models/product') 
//middleware 
app.use(express.static("public"));
app.use(express.json()); // help to get the data from request made and convert it to js object and and gives access to use that data
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// DB connection
async function main() {
  await mongoose.connect(
    "mongodb+srv://Prince:Prince1234@cluster0.mdlkjsb.mongodb.net/node-auth"
  );
  console.log("DB connection done");
  app.listen(8080);
}
main();

app.get('*',checkUser)
app.get('/',requireAuth,(req,res)=>{
    res.render('home');
})
app.get('/billing',async(req,res)=>{
  try{

    const products=await product.find({quantity: { $ne: 0 }}); 
    if(products){
    console.log(products);
    res.locals.products=products
    }
    res.render('billing')
}catch(err){
    res.json({message:err})
}

})

app.get('/productList',async(req,res)=>{
  try{
    const products=await product.find(); 
    res.json(products)
}catch(err){
    res.json({message:err})
}
})


app.use(authRoutes);