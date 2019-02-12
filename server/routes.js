const express = require('express')
const path = require('path')
const {searchAPI, itemAPI} = require('./controllers')
const router = express.Router()

router.use(express.static(path.resolve(process.cwd(), 'build')))

router.get('/api/items', async(req, res) => {
  if (!req.query.q) {
    return res.sendStatus(400)
  }

  res.json(await searchAPI(req.query.q))
})

router.get('/api/items/:id', async(req, res) => {
  if (!req.params.id) {
    return res.sendStatus(400)
  }

  res.json(await itemAPI(req.params.id))
})

router.get('*', (req, res) => {
  res.sendFile(path.resolve(process.cwd(), 'build', 'index.html'))
})

router.use((err, req, res) => {
  if (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

module.exports = router
