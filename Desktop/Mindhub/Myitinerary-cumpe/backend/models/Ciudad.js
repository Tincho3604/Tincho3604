const mongose = require('mongoose')


const ciudadSchema = new mongose.Schema({
    provincia: {type: String, required: true},
    ciudad: {type: String, required: true},
    imagen: {type: String, required: true}
})

const Ciudad = mongose.model('ciudade', ciudadSchema)

module.exports = Ciudad