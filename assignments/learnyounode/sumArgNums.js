var sum = 0

process.argv.forEach(element => {

    // console.log(element)
    if (parseInt(element)) {
        sum += parseInt(element)
    }

});

console.log(sum)