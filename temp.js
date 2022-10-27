const express=require('express')
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const app=express();
const authRoutes=require('./routes/authRoutes')
const bodyParser = require("body-parser")


// import product controller
const productController=require('./controller/productController')



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

    app.use(bodyParser.urlencoded({ extended: true }));
    app.listen(8080);

    app.get( '/products', productController.getProducts);

    // add a product
    app.post( '/addproducts', productController.addProduct);

    //get a particular product using params as id
    app.get( '/products/:productId', productController.getProduct);


    //update a product
    app.put( '/products/:productId', productController.updateProduct);

    //delete a product
    app.delete( '/products/:productId', productController.deleteProduct);
  }
  main();


