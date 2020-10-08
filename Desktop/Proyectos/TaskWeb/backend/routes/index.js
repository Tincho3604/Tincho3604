const { Router } = require('express')
const express = require('express')
const rutas = express.Router()

// rutas.get('/task', (req, res) => {
//     res.send("Respuesta a la peticion")
// })

rutas.route('/hola')
.get((req, res) => res.send("Holu :)"))




module.exports = rutas