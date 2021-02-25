'use strict'

const Cuenta = require('../models/cuentas')

function getCuenta(req, res) {
    let id = req.params.id

    Cuenta.findById(id, (err, cuenta) => {
        if (err) return res.status(500).send({ mensaje: `Error al realizar la petición: ${err}` })
        if (!cuenta) return res.status(404).send({ mensaje: 'La cuenta no existe' })

        res.status(200).send({ cuenta })
    })
}

function getCuentas(req, res) {
    Cuenta.find({}, (err, cuentas) => {
        if (err) return res.status(500).send({ mensaje: `Error al realizar la petición: ${err}` })
        if (!cuentas) return res.status(404).send({ mensaje: 'No existen cuentas' })

        res.status(200).send({ cuentas })
    })
}

function saveCuenta(req, res) {
    console.log('POST /api/cuentas')
    console.log(req.body)
    // res.status(200).send({ msg: "Producto Ingresado Correctamente!" })

    // Hemos creado un producto y añadido las propiedades
    let cuenta = new Cuenta()
    cuenta.user = req.body.user
    cuenta.pass = req.body.pass
    cuenta.imag = req.body.imag
    cuenta.lColor = req.body.lColor
    cuenta.rColor = req.body.rColor

    // Vamos a guardar el registro (con validación)
    cuenta.save((err, cuentaStored) => {
        if (err) {
            res.status(500).send({ mensaje: `Error al Guardar en la base de datos: ${err}` })
        }
        res.status(200).send({ cuenta: cuentaStored })
    })
}

function updateCuenta(req, res) {
    let id = req.params.id
    let update = req.body

    Cuenta.findByIdAndUpdate(id, update, (err, cuentaUpdate) => {
        if (err) return res.status(500).send({ mensaje: `Error al Actulizar el producto: ${err}` })

        res.status(200).send({ mensaje: 'Cuenta Actualizada correctamente!' })
    })
}

function deleteCuenta(req, res) {
    let id = req.params.id

    Cuenta.findById(id, (err, cuenta) => {
        if (err) return res.status(500).send({ mensaje: `Error al Borrar el producto: ${err}` })

        cuenta.remove(err => {
            if (err) return res.status(500).send({ mensaje: `Error al Borrar el producto: ${err}` })
            res.status(200).send({ mensaje: 'El producto ha sido Eliminado! ' })
        })
    })
}

module.exports = {
    getCuenta,
    getCuentas,
    saveCuenta,
    updateCuenta,
    deleteCuenta
}