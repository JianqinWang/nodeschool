var http = require('http');
var body1 = '';
var body2 = '';
var body3 = '';


http.get(process.argv[2], function (res){
  res.on("data", function (data){
      body1 += data;
  });
  res.on("end", function() {
    console.log(body1.toString());
  });
  http.get(process.argv[3], function (res){
    res.on("data", function (data) {
      body2 += data;
    });
    res.on("end", function() {
      console.log(body2.toString());
    });
    http.get(process.argv[4], function(res) {
      res.on("data", function (data){
        body3 += data;
      });
      res.on("end", function() {
        console.log(body3.toString());
      });
    });
  });
});
