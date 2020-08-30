const Ciudad = require('../models/Ciudad')


const locacionesController = {



pedirCiudades: (req,res) => {

    const lista = Ciudad.find()

    .then(lista => {
    res.json({success:true, lista:lista})
    })
    .catch(error => {
    res.json({success: false, error:error})
    })
},



nuevaCiudad: (req, res) => {


const {provincia,ciudad,imagen} = req.body



const nuevaCiudad = new Ciudad({
    provincia:provincia,
    ciudad: ciudad, 
    imagen: imagen
})




nuevaCiudad.save()
.then(city => {
    res.json({success: true, city:city})
})
.catch(error => {
    res.json({succes: false,error: error})
})

    }
}

    module.exports = locacionesController

