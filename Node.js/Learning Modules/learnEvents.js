const eventEmitter = require('events');

const emitter = new eventEmitter();

emitter.on('greet', (name) =>{

    console.log(`Hello ${name}`);

})

emitter.emit('greet', "Manas");

