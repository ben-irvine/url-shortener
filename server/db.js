const knex = require('knex')
const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])


function makeid(length, db = connection) {
    return new Promise(resolve => {
        let result = '';
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

        for (var i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        db("urls")
            .where('short_url', result)
            .select()
            .then(res => {
                if (res.length == 0) {
                    console.log("dose not exist yet")
                    console.log(result)
                    resolve(result)
                }
                else {
                    console.log("exists creating another")
                    for (var i = 0; i < length; i++) {
                        result += chars.charAt(Math.floor(Math.random() * chars.length));
                    }
                    resolve(result)
                }
            })

    })
}
// gets the short url and returns the long url
function getURL(url, db = connection) {
    console.log("get url db func hit")
    return db('urls')
        .where('short_url', url)
        .select()
}

async function createURL(newURL, db = connection) {
    console.log("post url db func hit")

    return makeid(4)
        .then(shortUrl => {
            return db('urls')
                .insert({
                    full_url: newURL,
                    short_url: shortUrl
                })
                .then(() => {
                    console.log(shortUrl)
                    return shortUrl
                })
                .catch(e => {
                    console.log(e)
                })
        })
}

module.exports = {
    getURL,
    createURL,
}