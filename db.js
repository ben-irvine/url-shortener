const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getURL(url, db = connection) {
    return db('urls').where(url = 'short_url').select()
}

function createURL(newURL, db = connection) {
    return db('urls').insert(newURL)
}



module.exports = {
    getURL,
    createURL,
}