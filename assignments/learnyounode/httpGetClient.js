var http = require('http')

http.get(process.argv[2], donow)

function donow(responseStream) {

    responseStream.setEncoding('utf-8')

    // THIS IS THE SAME THAN DOING ....
    responseStream.on('data', data => {
        console.log(data)
    })

    // THIS ...
    // responseStream.on('data', console.log)

}