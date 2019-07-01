var fs = require('fs')

var array


function doit() {
    fs.readFile(process.argv[2], doneReading)
}

function doneReading(err, data) {
    if (err) {
        console.log(err)
    } else {
        array = data.toString().split("\n")
        console.log(array.length - 1)
    }

}

doit()