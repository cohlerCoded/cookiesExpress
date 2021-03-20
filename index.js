const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser("thisismysecret"));

app.get("/greet", (req, res) => {
  const { name = "User" } = req.cookies;
  res.send(`Hey there, ${name}!`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "Jeff");
  res.send("Enjoy your cookie");
});

app.get("/getsignedcookie", (req, res) => {
  res.cookie("fruit", "grapes", { signed: true });
  res.send("OK SIGNED FRUIT COOKIE");
  // const { fruit = "Apple" } = req.signedCookies;
  // res.send(`My favorite fruit is ${fruit}!`);
});

app.get("/verifyfruit", (req, res) => {
  // console.log(req.cookie);
  // res.send(req.cookies);
  console.log(req.signedCookie);
  res.send(req.signedCookies);
});

app.listen(3030, () => {
  console.log("listening on localhost 3030");
});
