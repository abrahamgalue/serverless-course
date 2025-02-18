const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGODB_URI)

app.get('*', (req, res) => {
  res.send('Hola Mundo')
})

module.exports = app
