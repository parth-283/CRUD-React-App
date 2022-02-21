const express = require("express");
const app = express();
const router = express.Router();
const urlcheck = require("./middleware");

app.get("/", function (req, res) {
//   res.send("hello express");
res.sendfile(__dirname+'/Home.html')
});
router.get("/about", urlcheck, function (req, res) {
//   res.send("hello about");
res.sendfile(__dirname+'/About.html')

});
app.get("/login", function (req, res) {
//   res.send("hello login");
res.sendfile(__dirname+'/Login.html')

});
app.use("/", router);
app.listen(4000);
