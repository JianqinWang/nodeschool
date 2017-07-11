var async = require('async');
var http = require('http');
var body1 = '';
var body2 = '';
var body3 = '';

var getFunc = function (url, body) {
  http.get(url, function (res) {
    res.on("data", function (data) {
      body += data;
    });
    res.on("end", function () {
      console.log(body.toString());
    });
  });
};

async.series([
  getFunc(process.argv[2], body1),
  getFunc(process.argv[3], body2),
  getFunc(process.argv[4], body3)
]);
