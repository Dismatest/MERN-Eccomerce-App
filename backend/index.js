const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./route/user.js');
const authRoute = require('./route/auth.js');
const productRoute = require('./route/product.js');
const cartRoute = require('./route/cart.js');
const orderRoute = require('./route/order.js');
const paymentRoute = require('./route/stripe.js')
const cors = require('cors')


dotenv.config();

mongoose.connect(
    process.env.DATABASE_CONNECTION_URL
)
.then(()=>console.log("database connected successfully"))
.catch((error)=>console.log("error  connecting to the database", error));

app.use(cors())
app.use(express.json());
app.use('/api/v1/auth', authRoute)
app.use('/api/v1', userRoute)
app.use('/api/v1/product', productRoute)
app.use('/api/v1/cart', cartRoute)
app.use('/api/v1/order', orderRoute)
app.use('/api/v1/payments', paymentRoute)

app.listen(process.env.PORT || 5000, ()=>{
    console.log('listening on port 5000')
});