var http = require('http');
var body = '';

http.get(process.argv[2], function (res){
  res.on("data", function (data){
    body += data;
  });
  res.on("end", function() {
    console.log(body.toString().length);
    console.log(body.toString());
  });
});
