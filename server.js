const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.use(express.static('dist'))

app.use(function(req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

const server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port)
})
