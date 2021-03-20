const express = require("express");
const app = express();

app.get("/greet", (req, res) => {
  res.send("Hey there!");
});

app.listen(3030, () => {
  console.log("listening on localhost 3030");
});
