const express = require('express')
const router = express.Router()

//const db = require('../../db/db')

router.get('/', (req, res) => {
    console.log("route is running a GET request")
    console.log(res.body)
    db.getURL(res.body)
      .then(todos => {
        res.send(todos)
      })
      .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err.message)
      })
  })

  router.post('/', (req, res) => {
    console.log("route is running a POST request")
      console.log(req.body)
    db.createURL(req.body)
      .then(todo => {
        res.send(todo)
      })
      .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err.message)
      })
  })
  module.exports = router