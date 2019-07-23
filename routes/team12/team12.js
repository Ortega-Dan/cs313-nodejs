var express = require('express')
var router = express.Router()

var session = require('express-session')


router.use(session({
    secret: 'I love my wife and daughters',
    resave: false,
    saveUninitialized: true
}))

// RECEIVE DATA AS JSON to use it here in the req.body object
router.use(express.json())


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
        console.log('Team Week 12 Middleware - Accessed at Time: ', Date.now())
        next()
    })
    // define the home page route
router.get('/', function(req, res) {
    res.send('Team12 root')
})

router.post('/login', (req, res) => {

    let uname = req.body.username
    let pword = req.body.password

    let response = false


    console.log('Received...\nUser: ' + uname)
    console.log('Password: ' + pword)

    if (uname === "admin" && pword === "password") {
        response = true
        req.session.user = uname
    }

    res.send({ success: response })
})

module.exports = router