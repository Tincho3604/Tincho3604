const Itinerarios = require('../models/Itinerarios')
const Ciudad = require('../models/Ciudad')


const itinerariosController = {

//Metodo GET de itinerarios para obtener todos los itinerarios
pedirItinerario: async (req, res) =>{
    
    const actividad = await Itinerarios.find()
    .then(actividad => {
    res.json({success:true , actividad:actividad})
    })
    
    .catch(error => {
    res.json({success:false, error:error})
    })
},




//Metodo POST de itinerarios para cargar a la base de datos
cargarItinerario: async (req, res) => {
const{hastag, titulo, pic, rating, duracion, precio, cityId, comentarios} = req.body

const nuevaActividad = new Itinerarios({
    hashtag: hastag,
    titulo: titulo,
    pic: pic,
    rating: rating,
    duracion: duracion,
    precio: precio,
    cityId: cityId,
    comentarios : comentarios
    })

    nuevaActividad.save()
        res.json ({
        success:true,
        itinineraries: nuevaActividad
        })
    },







//Metodo GET para obtener ciudad por Id
obtenerActividades: async (req, res) => {
    
    const actividadId = await Itinerarios.find({cityId: req.params.id}).populate('cityId') 
    const ciudad = await Ciudad.find({_id: req.params.id})
    res.json({
        idCiudad:ciudad,
        actividadId:actividadId
    })
}




}

module.exports = itinerariosController

