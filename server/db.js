const knex = require('knex')
const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getURL(url, db = connection) {
    console.log("get url db func hit")
    console.log(url)
    return db('urls')
    .where('short_url', url)
    .select()
}

function createURL(newURL, db = connection) {
    console.log("post url db func hit")
    return db('urls').insert(newURL)
}



module.exports = {
    getURL,
    createURL,
}