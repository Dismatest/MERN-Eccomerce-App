const CryptoJS = require('crypto-js')
const UserModel = require('../models/UserModel');
const { verifyToken,verifyTonAuthorization, verifyTonAuthorizationAdmin } = require('./verifyToken');
const router = require('express').Router();


//update user

router.put("/update/:id", verifyTonAuthorization, async (req, res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASSWORD_SECRET
        ).toString();
    }
    try {
        const updateUser = await UserModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updateUser)
    }catch(err){
        res.status(500).json(err);
    }
})

//delete user

router.delete("/delete/:id", verifyTonAuthorization, async (req, res) =>{
    
    try{

        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json("user has been deleted")

    }catch(err){
        res.status(500).json(err);
    }
})

//get a single user

router.get("/find/:id", verifyTonAuthorizationAdmin, async (req, res) =>{
    
    try{

        const user = await UserModel.findById(req.params.id)
        const {password, ...others} = user._doc
        res.status(200).json(others)

    }catch(err){
        res.status(500).json(err);
    }
})

//get all users

router.get("/findall", verifyTonAuthorizationAdmin, async (req, res) =>{
    //querry the params with the data from, ie the name of the query is query = new
    //getting five new users
    const query = req.query.new
    try{

        const user = query ? await UserModel.find().sort({_id: -1}).limit(5) : await UserModel.find()
        res.status(200).json(user)

    }catch(err){
        res.status(500).json(err);
    }
})

//getting users who registared per month

router.get("/findstarts", verifyTonAuthorization, async (req, res) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
    try {

        const data = await UserModel.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {
                $project:{
                    //crete a variable called month and take the value of the month inside the database $createdAt
                    month:{$month: "$createdAt"}
                }
            },
            //returning the numbers of users and the year of registrations that
            {
                $group:{
                    _id: "$month",
                    total: {$sum: 1}
                }
            }
        ])
        res.status(200).json(data)
        
    } catch (error) {
        res.status(500).json(err)
        
    }
})

module.exports = router
