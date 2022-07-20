
const Cart = require('../models/Cart');
const { verifyToken,verifyTonAuthorization, verifyTonAuthorizationAdmin } = require('./verifyToken');
const router = require('express').Router();

//create products

router.post("/create", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const saveCart = await newCart.save()
        res.status(200).json(saveCart)
    } catch (error) {
        res.status(500).json(error);
    }
})

//update user

router.put("/update/:id", verifyTonAuthorization, async (req, res)=>{
    try {
        const updateCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updateCart)
    }catch(err){
        res.status(500).json(err);
    }
})

// // //delete cart

router.delete("/delete/:id", verifyTonAuthorization, async (req, res) =>{
    
    try{

        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("the cart has been deleted")

    }catch(err){
        res.status(500).json(err);
    }
})

//get all the users cart using findOne because every users only have one cart

router.get("/find/:userId", verifyTonAuthorization, async (req, res) =>{
    
    try{

        const cart = await Cart.findOne({userId: req.params.userId})
        res.status(200).json(cart)

    }catch(err){
        res.status(500).json(err);
    }
})

//get all cart items, admin can see the cart of all users

router.get("/findall", async (req, res) => {

    try {

        const carts = await Cart.find()
        res.status(200).json(carts)
        
    } catch (error) {
        res.status(500).json(error)
    }

})



module.exports = router
