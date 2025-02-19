const express = require('express')
const mongoose = require('mongoose')
const plates = require('./routes/plates')
const orders = require('./routes/orders')
const app = express()

mongoose.connect(process.env.MONGODB_URI)

app.use('/plates', plates)
app.use('/orders', orders)

module.exports = app