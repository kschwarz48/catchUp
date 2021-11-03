const fs = require("fs");
const bodyParser = require("body-parser");
const express = require("express");
const { SIGTERM } = require("constants");

const app = express();
const port = 3000;
let users = {};

const path = "./users.json";
if (fs.existsSync(path)) {
  users = JSON.parse(fs.readFileSync(path));
}

//app.get("/", (req, res) => {
//  res.send("Hello World.");
//});

app.use("/", express.static("client"));
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/login", (req, res) => {
  const credentials = req.body;
  if (!users[credentials.email]) {
    res.send("Incorrect Username/Password.");
  }
  const user = users[credentials.email];
  if (user.password != credentials.password) {
    res.send("Incorrect Username/Password.");
  }
  //Look up cookies | understand server set up and read/write of JSON | look up principles of authen-authorization
});

app.post("/register", (req, res) => {
  const user = req.body;
  if (users[user.email]) {
    res.send("Account with email already exists.");
  } else {
    users[user.email] = user;
    console.log(users);
    res.send("ok");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

process.on("SIGTERM", () => {
  fs.writeFileSync(path, JSON.stringify(users));
});
process.on("SIGINT", () => {
  fs.writeFileSync(path, JSON.stringify(users));
});
