var fs = require('fs')
var path = require('path')


function dirFilter(dir, ext, callback) {

    var newext = '.' + ext

    fs.readdir(dir, (err, data) => {
        if (err) {
            callback(err)
        } else {

            var newarray = [];

            data.forEach(element => {

                if (path.extname(element) === newext) {
                    newarray.push(element)
                }

            })

            callback(null, newarray)

        }

    })

}


module.exports = dirFilter