var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
        console.log('Week 10 Fammy Services - Resquested at Time: ', Date.now())
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

    var sql = "select username from fammyuser"

    pool.query(sql, function(err, result) {
            // If an error occurred...
            if (err) {
                console.log("Error in query: ")
                console.log(err);

                res.send("Error retrieving from DB")
            }

            // Log this to the console for debugging purposes.
            console.log("Back from DB with result:")
            console.log(result.rows[0]);

            res.send(result.rows)

        })
        // END OF POSTGRESQL QUERY TEST


})

module.exports = router