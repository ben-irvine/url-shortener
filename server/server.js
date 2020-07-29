const express = require('express')
const path = require("path")

const URLapi = require('./routes/api/urls')
const redirector = require('./routes/redirector')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/urls', URLapi)
server.use('/', redirector)


module.exports = server