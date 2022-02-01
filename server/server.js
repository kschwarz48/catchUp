const fs = require("fs");
const bodyParser = require("body-parser");
const express = require("express");
const authRoutes = require("./routes/auth.routes");
const { default: database } = require("./database");
const { default: workloadRoutes } = require("./routes/workload.routes");
const path = require("path");
const { createServer: createViteServer } = require("vite");

const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const res = require("express/lib/response");

const app = express();
const port = 3001;

// app.use("/", express.static("client"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
const oneDay = 1000 * 60 * 15;
app.use(
  sessions({
    secret: "31D8EDD78477661D21A76A1E77D62",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

database.connect();
authRoutes.registerRoutes(app);
workloadRoutes.registerRoutes(app);

app.use("*", (req, res) => {
  res.send("Hello WORLD")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
