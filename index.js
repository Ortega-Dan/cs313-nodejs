const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// Team assignments imports
var team10 = require('./routes/team10/team10')


// Project Additional Routers
var week10fammyServices = require('./routes/week10/fammyservices')

express()
    // This is the way to serve static files in the /staticow path ...
    //  but the files are within '/home/danort/Documents'
    // .use('/staticow', express.static('/home/danort/Documents'))
    // ...
    // And this is the way to serve static files to the root (/) path of the site and files will be ...
    // in the public dir of the currect project
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')

// Team assingments from here
.use('/team10', team10) // Routing to team 10 activity
    .get('/team9form', (req, res) => {
        res.render('pages/zteam9form')
    })
    // when the url goes to /math do the math and then go to domath.ejs 
    // ... done on purpose for the sake of learning
    .get('/team9math', (req, res) => {

        var num1 = req.query.num1;
        var num2 = req.query.num2;
        var operand = req.query.operand;

        var operation = num1 + operand + num2

        var answer = eval(operation)

        console.log(operation + " = " + answer)

        res.locals.answer = answer;

        res.render('pages/zteam9domath')
            // We could also do res.render('pages/domath', object)
            // and the members of the object will be directly visible within the domath.ejs file
            // therefore we could pass all the input from the request by passing req.query as the object
            // doing res.render('pages/domath', res.query)
    })


// FROM HERE ON WILL HAVE THE CODE FOR THE 2ND HALF NODEJS PROJECT
// Up to week 10
.use('/week10fammyServices', week10fammyServices)

.listen(PORT, () => console.log(`Listening on ${PORT}`))