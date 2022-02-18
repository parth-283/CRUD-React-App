const http = require('http');

http.createServer((req,res)=>{
    res.write("hello it's my first API");
    res.end();
}).listen(4500);