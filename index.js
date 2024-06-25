const config = require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./database/db");
const ejs = require("ejs");
const bodyParser = require("body-parser");




app.set("view engine", "ejs");
app.use(bodyParser.json());

app.listen(process.env.port, () => {
  console.log("Server is running! Port: " + process.env.port);
});

const routes = require("./routes/main");

app.use("/", routes);
app.use("/api", require("./api/api"));
