const express = require("express");
const CuentaCtrl = require("../controllers/cuentas");
const api = express.Router();

// Peticiones
api.get("/cuentas", CuentaCtrl.getCuentas);
api.get("/cuentas/:id", CuentaCtrl.getCuenta);
api.post("/cuentas", CuentaCtrl.saveCuenta);
api.put("/cuentas/:id", CuentaCtrl.updateCuenta);
api.delete("/cuentas/:id", CuentaCtrl.deleteCuenta);

module.exports = api;
