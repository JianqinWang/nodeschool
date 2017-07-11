var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var urlinfo = url.parse(req.url, true);
  var datestring = new Date(urlinfo.query['iso']);
  if (urlinfo.pathname === '/api/parsetime') {
    var dateobj = {};
    dateobj['hour'] = datestring.getHours();
    dateobj['minute'] = datestring.getMinutes();
    dateobj['second'] = datestring.getSeconds();
    res.end(JSON.stringify(dateobj));
  } else if (urlinfo.pathname === '/api/unixtime'){
    var unixobj = {};
    unixobj['unixtime'] = datestring.getTime();
    res.end(JSON.stringify(unixobj));
  } else {
    res.end(null);
  };
});
server.listen(process.argv[2]);
