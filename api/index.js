const express = require('express')
const app = express()

app.get('*', (req, res) => {
  console.log('Mi primera aplicacion serverless')
  res.json({ mensaje: 'Chanchito feliz!!' })
})

module.exports = app
