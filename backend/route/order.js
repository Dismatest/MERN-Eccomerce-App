
const Order = require('../models/Order');
const { verifyToken,verifyTonAuthorization, verifyTonAuthorizationAdmin } = require('./verifyToken');
const router = require('express').Router();

//create order

router.post("/create", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const saveOrder = await newOrder.save()
        res.status(200).json(saveOrder)
    } catch (error) {
        res.status(500).json(error);
    }
})

//update order

router.put("/update/:id", verifyTonAuthorizationAdmin, async (req, res)=>{
    try {
        const updateOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updateOrder)
    }catch(err){
        res.status(500).json(err);
    }
})

//delete order

router.delete("/delete/:id", verifyTonAuthorizationAdmin, async (req, res) =>{
    
    try{

        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("the cart has been deleted")

    }catch(err){
        res.status(500).json(err);
    }
})

//get user orders

router.get("/find/:userId", verifyTonAuthorization, async (req, res) =>{
    
    try{

        const orders = await Order.find({userId: req.params.userId})
        res.status(200).json(orders)

    }catch(err){
        res.status(500).json(err);
    }
})

//get all orders by the admin

router.get("/findall", async (req, res) => {

    try {

        const orders = await Order.find()
        res.status(200).json(orders)
        
    } catch (error) {
        res.status(500).json(error)
    }

})

//get monthly incomes

router.get("/income", verifyTonAuthorizationAdmin, async (req, res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1))

    try {
        
        const income = await Order.aggregate([
            {$match: {createdAt: {$gte: previousMonth}}},
            {
                $project: {
                    month:  {$month: "$createdAt"},
                    sales: "$amount",
            }
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: "$sales"}
                }
            }
            
        ])

        res.status(200).json(income)

    } catch (error) {

        res.status(500).json(error)
        
    }
})


module.exports = router
