const knex = require('knex')
const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

//in this code I use async functions even though I could have just made it easyer for my self. 
//I did this just to play around with how they work mught chnage it later
//its a bit hard to read so ill explain
//the create url function is run then runs the makeid function and waits
//the make id function returns the random dumbers you see for the url e.g. BH9I
//it allso makes sure that number is not allready being used. if so it recrates those numbers and returns that instead
//then the createurl function contines and puts it in the data base and returns the shortened url (BH9I)


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
                   
                    console.log(result)
                    resolve(result)
                }
                else {
                  
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

async function createURL(data, db = connection) {
    console.log("post url db func hit")
    
    return makeid(4)
        .then(shortUrl => {
            return db('urls')
                .insert({
                    full_url: data.url,
                    short_url: shortUrl,
                    creator: data.user
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

function findURL (name, db = connection) {
    return db("urls")
        .where("creator", name)
}

module.exports = {
    getURL,
    createURL,
    findURL,
}