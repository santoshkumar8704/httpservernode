const http = require("http");
const express = require("express");
const app = express();
app.use("/", (req, res, next) => {
  if (req.path === "/") {
    res.write("hello ramya!");
    res.write("roger!!");
    res.end();
  }
  else {
    next();
  }
});
app.get("/hiramya", (req, res, next) => {
  res.send("Hiiiii ramuuuuuuuuuuuuuu!");
});

app.listen(3000, () => {
  console.log("server is running");
});
