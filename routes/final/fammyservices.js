var express = require('express')
var router = express.Router()

var session = require('express-session')
const bcrypt = require('bcrypt');


router.use(session({
    secret: 'I love my wife and daughters',
    resave: false,
    saveUninitialized: true
}))


// FIRST CONNECTING TO POSTGRESQL DB AT HEROKU
const connectionString = process.env.DATABASE_URL

const { Pool } = require('pg')

const pool = new Pool({ connectionString: connectionString })

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

// SESSION MANAGEMENT
router.post('/login', (req, res) => {

    let uname = req.body.username
    let pword = req.body.password

    let response = false


    console.log('Received...\nUser: ' + uname)
        // console.log('Password: ' + pword)
        // hashThePass(pword)


    var sql = "select password from authentication where userid =( select keyid from fammyuser where username = '" + uname + "')"

    pool.query(sql, function(err, result) {
        // If an error occurred...
        if (err) {
            console.log("Error in query: ")
            console.log(err);
            res.status(404)
            res.send("Error retrieving from DB")
        }

        // Log this to the console for debugging purposes.
        if (!result.rows.length || !bcrypt.compareSync(pword, result.rows[0].password)) {
            res.send({ success: false, message: "Wrong Username Or Password" })
        } else {

            res.send({ success: true, message: "Existing user" })

            req.session.user = uname
        }

    })
})


function verifyLogin(req, res, next) {
    if (req.session.user) next()
    else {
        // res.status(401)
        res.send({ success: false, message: "Unauthorized" })
    }
}


module.exports = router