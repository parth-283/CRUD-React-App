const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/profile/:name", function (req, res) {
  data= {
    email:'test@test.com',
    address:'surat',
    skills:['reactjs','php','java','html']  
  }
  res.render("profile", { name: req.params.name , data:data});
//   console.warn(req.params.name);
});

app.listen(4500);
