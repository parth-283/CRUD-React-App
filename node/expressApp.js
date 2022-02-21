const express = require('express')
const app = express();

const checkurl = function(req,res,next)
{
    console.warn("current route is",req.originalUrl);
    next();
}
app.use(checkurl);

app.get('/',function(req,res){
    res.send("hello express")
});
app.get('/about',function(req,res){
    res.send("hello about")
});
app.get('/login',function(req,res){
    res.send("hello login")
});
app.listen(4000)