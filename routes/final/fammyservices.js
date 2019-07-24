var express = require('express')
var router = express.Router()

// middleware that is specific to this router

// RECEIVE DATA AS JSON to use it here in the req.body object
router.use(express.json())

// Middleware Time Logger for requests
router.use(function timeLog(req, res, next) {
        console.log('Final FammyServices Middleware - Accessed at Time: ', new Date)
        console.log('Requesting URL: ' + req.url)
        next()
    })
    // define the home page route
router.get('/', function(req, res) {
    res.send('FammyServices Root')
})

router.get('/fammymembers', function queryMembers(req, res) {

    // FIRST CONNECTING TO POSTGRESQL DB AT HEROKU
    const connectionString = process.env.DATABASE_URL

    const { Pool } = require('pg')

    const pool = new Pool({ connectionString: connectionString })

    // console.log(req.params.id)

    var sql = "select keyid, username from fammyuser"

    pool.query(sql, function(err, result) {
            // If an error occurred...
            if (err) {
                console.log("Error in query: ")
                console.log(err);

                res.send("Error retrieving from DB")
            }

            // Log this to the console for debugging purposes.
            console.log("Back from DB with result:")
            console.log(result.rows);

            res.send(result.rows)

        })
        // END OF POSTGRESQL QUERY TEST
})

router.post('/message', function something(req, res) {

    console.log('Service Called by POST')

    console.log("The received message is: " + req.body.message)

    res.send("Server Response from Super Server")
})

module.exports = router