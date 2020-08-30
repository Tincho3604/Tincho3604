const express = require('express')
const rutas = express.Router()
const locacionesController = require('../controller/locacionesController')
const itinerariosController = require('../controller/itinerariosController')

rutas.route("/ciudades")
.get(locacionesController.pedirCiudades)
.post(locacionesController.nuevaCiudad)

rutas.route("/itinerario")
.get(itinerariosController.pedirItinerario)
.post(itinerariosController.cargarItinerario)

rutas.route("/itinerario/:id")
.get(itinerariosController.obtenerActividades)





module.exports = rutas
