const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function (req, res) {
  const urlinfo = url.parse(req.url, true);
  if (req.method === 'GET' && urlinfo.pathname === '/api/getmethod') {
    fs.createReadStream('storagefile.json').pipe(res);
  } else if (req.method === 'PUT' && urlinfo.pathname === '/api/putmethod') {
    req.on('data', function (data) {
      let wstream = fs.createWriteStream('storagefile.json');
      wstream.end(data.toString() + "\n");
    });
    req.on('end', function (){
      res.end('Fin');
    });
  } else {
    res.end('Fail');
  };
});
server.listen(8001);
