var danchoDirFilter = require('./dirFiltererModule')


danchoDirFilter(process.argv[2], process.argv[3], (err, data) => {
    if (err)
        console.log(err)
    else
        data.forEach(element => {
            console.log(element)
        })
})