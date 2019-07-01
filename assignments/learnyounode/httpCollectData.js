var http = require('http')

var entireString = ""

function concatData(line) {
    entireString += line
}

http.get(process.argv[2], responseStream => {

    responseStream.setEncoding('utf-8')

    // Coolest way to do this ... this calls the function and passes the parameter
    responseStream.on('data', concatData)

    responseStream.on('end', () => {
        console.log(entireString.length)
        console.log(entireString)
    })

})