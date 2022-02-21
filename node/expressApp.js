const express = require("express");
const app = express();
const router = express.Router();
const urlcheck = require("./middleware");

app.get("/", function (req, res) {
  res.send("hello express");
});
router.get("/about", urlcheck, function (req, res) {
  res.send("hello about");
});
app.get("/login", function (req, res) {
  res.send("hello login");
});
app.use("/", router);
app.listen(4000);
