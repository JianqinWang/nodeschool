var fs = require('fs');

var listfunction = function (path, ext, callback){
  fs.readdir(path, function(err, data) {
    if (err)
      return callback(err);
    data = data.filter(function (extname) {
      return extname.indexOf('.' + ext) != -1;
    });
    return callback(null, data);
  });
}

module.exports = listfunction;
