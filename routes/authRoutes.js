const {Router} = require('express')
const router=Router();
const authController=require('../controller/authController')
const productController=require('../controller/productController')
const salesController=require('../controller/salesController')

router.get('/signup',authController.signup_get)
router.post('/signup',authController.signup_post)
router.get('/login',authController.login_get)
router.post('/login',authController.login_post)
router.get('/logout',authController.logout_get)
router.get('/products',productController.getProducts)
router.get('/products/:productId',productController.getProduct)
router.get('/addproduct',productController.getAddProduct)
router.post('/addproduct',productController.addProduct)
router.get('/update/:productId',productController.getUpdateProduct)
router.post('/update/:productId',productController.updateProduct)
router.post('/addSale',salesController.addSale)
module.exports=router 