const express = require("express");
const app = express();

app.get("/greet", (req, res) => {
  res.send("Hey there!");
});

app.get("/setname", (req, res) => {
  res.cookie("name", "Jeff");
  res.send("Enjoy your cookie");
});

app.listen(3030, () => {
  console.log("listening on localhost 3030");
});
