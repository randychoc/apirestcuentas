'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CuentaSchema = Schema({
    user: String,
    pass: String,
    imag: String,
    lColor: String,
    rColor: String
})

module.exports = mongoose.model('Cuenta', CuentaSchema)
