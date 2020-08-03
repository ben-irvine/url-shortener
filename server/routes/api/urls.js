const express = require('express')
const router = express.Router()

const db = require("../../db")
  
  router.post('/', (req, res) => {
    console.log("route is running a POST request")
      console.log(req.body.data)
    db.createURL(req.body.data)
      .then(data => {
          console.log("data", data)
        res.send({data})
      })
      .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err.message)
      })
  })
  
  module.exports = router