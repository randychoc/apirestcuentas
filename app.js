'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, HEAD");
    res.setHeader("Access-Control-Max-Age", "1000");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.use('/api', api)

module.exports = app