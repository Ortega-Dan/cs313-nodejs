var express = require('express')
var router = express.Router()

var session = require('express-session')
const bcrypt = require('bcrypt');


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
        console.log('Requesting ' + req.url)
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
        // console.log('Password: ' + pword)
    hashThePass(pword)

    if (uname === "admin" && pword === "password") {
        response = true
        req.session.user = uname
    }

    res.send({ success: response })
})

router.post('/logout', (req, res) => {


    let response = false

    if (req.session.user) {
        req.session.destroy()
        response = true
    }

    res.send({ success: response })
})

router.get('/getServerTime', verifyLogin, (req, res) => {

    response = false


    response = true
    res.send({ success: response, time: new Date() })
})

function verifyLogin(req, res, next) {
    if (req.session.user) next()
    else {
        res.status(401)
        res.send({ success: false, message: "Unauthorized" })
    }
}

function hashThePass(pword) {
    console.log(pword)
    let encripted = bcrypt.hashSync(pword, 10)
    console.log(encripted)
    console.log(bcrypt.compareSync(pword, encripted))
}

module.exports = router