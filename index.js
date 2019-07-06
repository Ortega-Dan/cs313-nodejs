const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

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
    // when the user goes to the root redirect to form.ejs
    .get('/', (req, res) => {

        // FIRST CONNECTING TO POSTGRESQL DB AT HEROKU
        const connectionString = process.env.DATABASE_URL

        const { Pool } = require('pg')

        const pool = new Pool({ connectionString: connectionString })

        var sql = "select * from firsttable"

        pool.query(sql, function(err, result) {
                // If an error occurred...
                if (err) {
                    console.log("Error in query: ")
                    console.log(err);
                }

                // Log this to the console for debugging purposes.
                console.log("Back from DB with result:")
                console.log(result.rows[0]);

            })
            // END OF POSTGRESQL QUERY TEST

        res.render('pages/form')
    })
    // when the url goes to /math do the math and then go to domath.ejs 
    // ... done on purpose for the sake of learning
    .get('/math', (req, res) => {

        var num1 = req.query.num1;
        var num2 = req.query.num2;
        var operand = req.query.operand;

        var operation = num1 + operand + num2

        var answer = eval(operation)

        console.log(operation + " = " + answer)

        res.locals.answer = answer;

        res.render('pages/domath')
            // We could also do res.render('pages/domath', object)
            // and the members of the object will be directly visible within the domath.ejs file
            // therefore we could pass all the input from the request by passing req.query as the object
            // doing res.render('pages/domath', res.query)
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))