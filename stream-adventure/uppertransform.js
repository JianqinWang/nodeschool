const through = require('through2');
var stream = through(write);

function write (buffer, NULL, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

process.stdin.pipe(stream).pipe(process.stdout);
