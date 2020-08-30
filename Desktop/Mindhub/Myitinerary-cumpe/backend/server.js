const express = require('express')
const cors = require('cors')
const rutas = require('./routes/index')

//SERVIDOR
const servidor = express()

require('dotenv').config()

//Conexion a la base de datos
require('./config/db')


//Middleware
servidor.use(cors())
servidor.use(express.json())

//Rutas 
servidor.use('/api',rutas)


servidor.listen(4000, () => console.log("App funcando"))
