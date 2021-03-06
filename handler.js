const express = require('express')
const compression = require('compression')
const sls = require('serverless-http')
const app = express()

app.use(compression())
app.use(express.static('dist', { maxAge: 1000 * 60 * 60 * 24 }))

app.use((req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

module.exports.server = sls(app)
