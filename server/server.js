const express = require('express')

// const todos = require('./routes/api/urls')

const server = express()

server.use(express.json())
server.use(express.static('public'))

//server.use('/api/v1/urls', todos)
module.exports = server