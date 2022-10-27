const {Router} = require('express')
const router=Router();
const authController=require('../controller/authController')
const productController=require('../controller/productController')

router.get('/products',productController.getProducts)
router.get('/products/:productId',productController.getProduct)
router.get('/addproduct',productController.getAddProduct)
router.post('/addproduct',productController.addProduct)
module.exports=router 