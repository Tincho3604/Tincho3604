const mongoose = require('mongoose')


const Itinerary = new mongoose.Schema({
    hashtag: {type: Array,required: true},
    titulo: {type: String, required: true},
    pic: {type: String, required: true},
    rating: {type: Number, required: true},
    duracion: {type: Number, required: true},
    precio: {type: Number, required: true},
    cityId: {type: mongoose.Schema.ObjectId, ref: 'ciudade'},
    comentarios : {type: Array, default:[]}
})

const Itinerarios = mongoose.model('itinerario', Itinerary)

module.exports = Itinerarios