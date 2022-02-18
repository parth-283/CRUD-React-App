const http = require('http');
http.createServer((req,res)=>{
    res.write("hello install  nodemon package");
    res.end();
}).listen(4000);