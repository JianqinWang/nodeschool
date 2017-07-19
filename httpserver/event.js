const EventEmitter = require('events').EventEmitter;
const myEvent = new EventEmitter();

myEvent.on('randomString', function (randomStr) {
  console.log('Received the string: ' + randomStr);
});

myEvent.emit('randomString', randomString());

function randomString() {
  const stringsArr = ['NodeJs', 'coligo.io', 'Javascript', 'EventEmitters'];
  return stringsArr[Math.floor(Math.random() * stringsArr.length)];
};
