const http = require('http');

const reqURL = process.argv[2];
const reqMethod = process.argv[3];

let reqPath = '';
let reqData = '';
if (reqMethod === 'GET') {
  reqPath = '/api/getmethod';
} else if (reqMethod === 'PUT') {
  reqPath = '/api/putmethod';
  reqData = process.argv[4];
} else {
  return console.log('Please check your input');
}

const options = {
  hostname: reqURL,
  port: 8001,
  path: reqPath,
  method: reqMethod
};

const req = http.request(options, (res) => {
  res.on('data', (chunk) => {
    console.log(chunk.toString());
  });
  res.on('end', () => {
    console.log('Finish');
  });
});
if (reqMethod === 'PUT') {
  req.write(reqData);
}
req.end();
