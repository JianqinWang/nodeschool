var fs = require('fs');

fs.readdir(process.argv[2], function (err, data) {
  if (err) {
    return console.log(err);
  } else {
    data.forEach(function (element) {
      if (element.endsWith('.' + process.argv[3])) {
        console.log(element);
      }
    });
  }
});
