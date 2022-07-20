const router = require("express").Router();
const stripe = require("stripe")(process.env.TRIPE_API_SECRET_KEY)

router.post("/payment", (req, res)=>{
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: req.body.amount,
    }, (stripeErr, stripeResponse)=>{
        if(stripeErr){
            res.status(500).json(stripeErr)
        }else{
            res.status(200).json(stripeResponse)
        }
    })
})

module.exports = router