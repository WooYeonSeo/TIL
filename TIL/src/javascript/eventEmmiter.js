const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');



//const myEmitter = new MyEmitter();
myEmitter.on('event1', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously',b);
  });
});

myEmitter.on('event1', (a, b) => {
    console.log('this happens asynchronously',b);
});
myEmitter.emit('error', new Error('whoops!'));
myEmitter.emit('event1', 'a', 'b');