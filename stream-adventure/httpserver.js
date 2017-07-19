const http = require('http');
const fs = require('fs');
const through = require('through2');

var stream = through(write);
function write (buffer, NULL, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

const server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(stream).pipe(res);
  }
});
server.listen(process.argv[2]);
