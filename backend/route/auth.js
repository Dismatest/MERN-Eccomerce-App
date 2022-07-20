const router = require('express').Router();
const UserModel = require('../models/UserModel')
const CryptoJS = require('crypto-js')
const Jwt = require('jsonwebtoken')

//register

router.post('/register', async (req, res) => {
    
    const newUser = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString(),
    })
    try{
        const saveUser = await newUser.save()
        res.status(200).json(saveUser)
    }catch(err){
        res.status(500).json(err)
    }

});

//login

router.post("/login", async (req, res) => {
    try{
        const user = await UserModel.findOne({
            username: req.body.username
        })
        //the bellow code is the same as using ifstatement

        !user && res.status(500).json("Wrog redentials")
        // if(!user && res.status(500)) return json("Wrog redentials")

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET).toString(CryptoJS.enc.Utf8)
       // const hashedPasswordToString = hashedPassword.toString(CryptoJS.enc.Utf8)
        
        if(hashedPassword != req.body.password) return res.status(500).json("wrong credentials")
        
        //hashedPasswordToString != req.body.password && res.status(500).json("wrong credentials")
        //to avoid returning password to the user we will destructure the user object
        
        //jwtToken 
        const accessToken = Jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SECRET_KEY, {expiresIn:"3d"})
        //mongos stores documens in _doc object

        const {password, ...otherInformation} = user._doc
        
        res.status(200).json({...otherInformation, accessToken})

    }catch(err) {
        res.status(500).json(err)
    }

})
module.exports = router