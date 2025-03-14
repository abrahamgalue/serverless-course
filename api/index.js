const express = require('express')
const { json } = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const meals = require('./routes/meals')
const orders = require('./routes/orders')
const auth = require('./routes/auth')

const app = express()
app.use(json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)

app.use('/meals', meals)
app.use('/orders', orders)
app.use('/auth', auth)

module.exports = app