const { Router } = require('express')
const crypto = require('node:crypto')
const Users = require('../models/Users')

const router = Router()

router.post('/register', (req, res) => {
  const { email, password } = req.body
  crypto.randomBytes(16, (err, salt) => {
    const newSalt = salt.toString('base64')
    crypto.pbkdf2(password, newSalt, 10000, 64, 'sha1', (err, key) => {
      const encryptedPassword = key.toString('base64')
      Users.findOne({ email }).exec()
        .then(user => {
          if (user) {
            return res.send('usuario ya existe')
          }
          Users.create({
            email,
            password: encryptedPassword,
            salt: newSalt
          }).then(() => {
            res.send('usuario creado con exito')
          })
        })
    })
  })
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  Users.findOne({ email }).exec()
    .then(user => {
      if (!user) {
        return res.send('usuario y/o contraseña incorrecta')
      }
      crypto.pbkdf2(password, user.salt, 10000, 64, 'sha1', (err, key) => {
        const encryptedPassword = key.toString()
        if (user.password === encryptedPassword) {
          const token = signToken(user._id)
          return res.send({ token })
        }
        return res.send('usuario y/o contraseña incorrecta')
      })
    })
})


module.exports = router