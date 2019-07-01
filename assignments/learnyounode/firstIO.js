var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var array = buffer.toString().split("\n");

console.log(array.length - 1);