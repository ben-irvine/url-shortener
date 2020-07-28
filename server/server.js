const express = require('express')

const URLapi = require('./routes/api/urls')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1/urls', URLapi)
module.exports = server