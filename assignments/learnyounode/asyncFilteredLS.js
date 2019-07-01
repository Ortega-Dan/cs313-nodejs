var fs = require('fs')

// Arrow Function
fs.readdir(process.argv[2], (err, filesArray) => {

    if (err) {
        console.log(err)
    } else {

        // Arrow Function
        filesArray.forEach(element => {

            // Regex matching
            if (element.match('^.+\.' + process.argv[3] + '$')) {
                console.log(element)
            }

        })

    }
})