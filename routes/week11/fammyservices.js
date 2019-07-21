var express = require('express')
var router = express.Router()

// middleware that is specific to this router

// RECEIVE DATA AS JSON
router.use(express.json())
router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })
    // define the home page route
router.get('/', function(req, res) {
    res.send('FammyServices Root')
})

router.get('/fammymembers', function something(req, res) {

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

    console.log('POST SERVICE CALLED')

    console.log(req.body.message)

    res.send("Something weird")
})

module.exports = router