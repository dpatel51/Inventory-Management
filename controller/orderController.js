const User=require('../models/User')


// methods for managing orders

// get all orders
exports.getOrders=async(req,res)=>{

    try{
        const orders=await Order.find()
        res.json(orders)
    }catch(err){
        res.json({message:err})
    }
}

// get a specific order
exports.getOrder=async(req,res)=>{
    try{
        const order=await Order.findById(req.params.orderId)
        res.json(order)
    }catch(err){
        res.json({message:err})
    }
}

// add an order

exports.addOrder=async(req,res)=>{
    const order=new Order({
        id:req.body.id,
        product:req.body.product,
        quantity:req.body.quantity,
        price:req.body.price
    })
    try{
        const savedOrder=await order.save()
        res.json(savedOrder)
    }catch(err){
        res.json({message:err})
    }
}

// update an order
exports.updateOrder=async(req,res)=>{
    try{
        const updatedOrder=await Order.updateOne(
            {_id:req.params.orderId},
            {$set:{id:req.body.id,product:req.body.product,quantity:req.body.quantity,price:req.body.price}}
        )
        res.json(updatedOrder)
    }catch(err){
        res.json({message:err})
    }
}

// delete an order
exports.deleteOrder=async(req,res)=>{
    try{
        const removedOrder=await Order.remove({_id:req.params.orderId})
        res.json(removedOrder)
    }catch(err){
        res.json({message:err})
    }
}

