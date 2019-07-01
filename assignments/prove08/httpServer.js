var http = require('http')

function onrequest(req, res) {
    // console.log(req.url)
    if (req.url == '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>Welcome to the home page</h1>')
        res.end()
    } else if (req.url == '/getData') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write('{"name":"Dan Ortega", "class":"cs313"}')
        res.end()
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write('<p>Page not found</p>')
        res.end()
    }
}

var app = http.createServer(onrequest)

app.listen(8888)