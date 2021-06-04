"use strict";
require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization')

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, OPTIONS, HEAD"
  );
  res.setHeader("Access-Control-Max-Age", "1000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose.connect(
  config.db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      return console.log(`Error connecting to CuentasJS Database: ${err}`);
    }
    console.log("CuentasJS Database is connected!");

    // Inicializamos el Servidor
    app.listen(config.port, () => {
      console.log(`API REST running in http://localhost:${config.port}`);
    });
  }
);
