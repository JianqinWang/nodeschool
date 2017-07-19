const events = require('events').EventEmitter;
const util = require('util');

const Person = function(name) {
  this.name = name;
}

util.inherits(Person, events);

let james = new Person('james');
let mary = new Person('mary');
let ryu = new Person('ryu');

let people = [james, mary, ryu]

people.forEach(function(person) {
  person.on('speak', function(mssg) {
    console.log(person.name + ' said: ' + mssg);
  })
});

james.emit('speak', 'wassup');
