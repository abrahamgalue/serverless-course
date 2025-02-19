const express = require('express')
const mongoose = require('mongoose')
const meals = require('./routes/meals')
const orders = require('./routes/orders')
const app = express()

mongoose.connect(process.env.MONGODB_URI)

app.use('/meals', meals)
app.use('/orders', orders)

module.exports = app