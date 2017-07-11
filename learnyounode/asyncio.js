var fs = require('fs');

fs.readFile(process.argv[2], function callback (err, data) {
  if (err) {
    return;
  } else {
    var numNl = data.toString().split('\n').length - 1;
    console.log(numNl);
  }
});
