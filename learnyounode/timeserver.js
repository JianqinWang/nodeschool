var net = require('net');
var curTime = '';

var server = net.createServer(function (socket) {
  date = new Date();
  curTime += date.getFullYear().toString() + '-';
  curTime += ("0" + (date.getMonth() + 1).toString()).slice(-2) + '-';
  curTime += ("0" + date.getDate().toString()).slice(-2) + ' ';
  curTime += ("0" + date.getHours().toString()).slice(-2) + ':';
  curTime += ("0" + date.getMinutes().toString()).slice(-2) + '\n';
  socket.end(curTime);
});
server.listen(process.argv[2]);
