const express = require('express')
const cors = require('cors')
const rutas = require('./routes/index')
const app = express()

const port = process.env.PORT || 4000
const host = process.env.HOST || '0.0.0.0'

//SERVIDOR

require('dotenv').config()

//Conexion a la base de datos
require('./Config/db')

//Middleware
app.use(cors())
app.use(express.json())

//Rutas 
app.use('/api',rutas)

app.listen(port, host, () => console.log("Server Listening on port "+ port))













