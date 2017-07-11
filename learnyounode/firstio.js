var fs = require('fs');

var fileinfo = fs.readFileSync(process.argv[2]);

var str = fileinfo.toString();

str = str.split('\n');
console.log(str.length - 1);
