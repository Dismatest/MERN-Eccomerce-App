const CryptoJS = require('crypto-js')
const Product = require('../models/Product');
const { verifyToken,verifyTonAuthorization, verifyTonAuthorizationAdmin } = require('./verifyToken');
const router = require('express').Router();

//create products

router.post("/create", verifyTonAuthorizationAdmin, async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const saveProduct = await newProduct.save()
        res.status(200).json(saveProduct)
    } catch (error) {
        res.status(500).json(error);
    }
})

//update user

router.put("/update/:id", verifyTonAuthorizationAdmin, async (req, res)=>{
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updateProduct)
    }catch(err){
        res.status(500).json(err);
    }
})

// //delete user

router.delete("/delete/:id", verifyTonAuthorizationAdmin, async (req, res) =>{
    
    try{

        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("the product has been deleted")

    }catch(err){
        res.status(500).json(err);
    }
})

// //get a single product

router.get("/find/:id", async (req, res) =>{
    
    try{

        const product = await Product.findById(req.params.id)
        res.status(200).json(product)

    }catch(err){
        res.status(500).json(err);
    }
})

// //get all products

router.get("/findall", async (req, res) =>{
    //query the params with the data from, ie the name of the query is query = new
    //getting five new products
    //query the products based on the query params and the categories
    const qOne = req.query.new
    const qTwo = req.query.category
    try{
        let products
        if(qOne){
           products = await Product.find().sort({createdAt: -1}).limit(5)
        //we fetch the data if the product is in the categories array in the database, a condition
        }else if(qTwo){
            products = await Product.find().sort({categories: {
                $in: [qTwo]
            }})
        }else{
            products = await Product.find()
        }
        
        res.status(200).json(products) 

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router
