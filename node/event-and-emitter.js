var events = require('events');
var eventemitter = new events.EventEmitter();

eventemitter.on("watch",function(name){
    console.log(name,"is watch");
})

eventemitter.emit("watch","peter")