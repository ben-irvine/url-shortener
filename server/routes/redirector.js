const express = require('express')
const router = express.Router()

const db = require("../db")

router.get('/:url', (req, res) => {
    console.log("route is running a GET request")
    console.log(req.params.url)
    db.getURL(req.params.url)
      .then(data => {
          console.log(data)
        if(data.length == 0) res.send("no such url")
        else res.redirect(data[0].full_url)
      })
      .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err.message)
      })
  })
module.exports = router