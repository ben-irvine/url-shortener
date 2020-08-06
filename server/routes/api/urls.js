const express = require('express')
const router = express.Router()

const db = require("../../db")
  
  router.post('/', (req, res) => {
    console.log("route is running a POST request")
      console.log(req.body)
    db.createURL(req.body)
      .then(data => {
          console.log("data", data)
        res.send({data})
      })
      .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err.message)
      })
  })
  
  router.get("/:uid", (req, res) => {
    console.log("router is running a GET request")
    console.log("param: "+ req.params.uid)
    db.findURL(req.params.uid)
    .then(data => {
      console.log("found: ", data)
      res.send({data})
    })
  })

  module.exports = router