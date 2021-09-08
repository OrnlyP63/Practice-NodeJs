const EventEmitter = require('events');
const emitter = new EventEmitter;
emitter.addListener('myEvent', function (args) {
  console.log('Hello I found you: myEvent');
});

emitter.emit('myEvent');