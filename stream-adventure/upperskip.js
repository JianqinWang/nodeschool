const split = require('split');
const through2 = require('through2');

let counter = 1;

process.stdin
  .pipe(split())
  .pipe(through2(function (line, NULL, next) {
    if (counter % 2 === 1) {
      this.push(line.toString().toLowerCase() + '\n');
    } else {
      this.push(line.toString().toUpperCase() + '\n');
    }
    counter++;
    next();
  })).pipe(process.stdout);
