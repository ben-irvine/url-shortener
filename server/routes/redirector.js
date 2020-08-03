const express = require('express')
const router = express.Router()

const db = require("../db")

router.get('/:url', (req, res) => {
    console.log("route is running a GET request")
    console.log(req.params.url)
    db.getURL(req.params.url)
      .then(data => {
          console.log("the log", data[0].full_url)
        if(data.length == 0) res.send("no such url") //checks if the short url exists
        else if(data[0].full_url.includes("http")) res.redirect(data[0].full_url) //checks if url has http
        else res.redirect("http://" + data[0].full_url) //if there is no http it adds it to the begining
       //other wise www.google.com  would rediect to localhost:3000/www.google.com
      })
      .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err.message)
      })
  })
module.exports = router