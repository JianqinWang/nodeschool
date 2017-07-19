const request = require('request');
const fs = require('fs');

var src = fs.createReadStream(process.stdout, process.stdin);
var dest = fs.createWriteStream(process.stdout);
var r = request.post('http://localhost:8099');

src.pipe(r).pipe(dest);
