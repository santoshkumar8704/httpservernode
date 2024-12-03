const http = require("http");
const express = require("express");
const app = express();
app.get("/hi",(req,res,next) => {res.send("res is res")})

app.listen(3000, () => {
  console.log("server is running");
});
