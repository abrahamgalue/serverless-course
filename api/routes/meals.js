const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.send('Hola soy meals')
})

router.get('/:id', (req, res) => {
  res.send(req.params.id)
})

router.post('/', (req, res) => {
  res.send('soy post')
})

router.put('/:id', (req, res) => {
  res.send('soy put')
})

router.delete('/:id', (req, res) => {
  res.send('soy delete')
})

module.exports = router