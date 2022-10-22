const express=require('express')
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const app=express();
const authRoutes=require('./routes/authRoutes')


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

// app.get('*',checkUser)

app.get('/',(req,res)=>{
    res.render('Home');
})





app.use(authRoutes);