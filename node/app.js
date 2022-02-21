const express = require('express')
const app = express();
app.set('view engine','ejs')
app.get("/profile/:name", function (req, res) {
res.render('profile',{name:req.params.name})
console.warn(req.params.name);
});

app.listen(4500)