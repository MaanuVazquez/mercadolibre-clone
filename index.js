const express = require('express')
const cors = require('cors')
const routes = require('./server/routes')
const app = express()

const PORT = process.env.PORT || 1337

app.use(cors())
app.use('/', routes)

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`)
})
