const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

app.get("/greet", (req, res) => {
  const { name = "User" } = req.cookies;
  res.send(`Hey there, ${name}!`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "Jeff");
  res.send("Enjoy your cookie");
});

app.listen(3030, () => {
  console.log("listening on localhost 3030");
});
