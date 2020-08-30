import React from 'react'
import Menu from '../components/Menu'
import axios from 'axios'
import Pic from '../components/Pic'
import Destinos from '../components/Destinos'
import Error from '../components/Error'
import { NavLink } from 'react-router-dom'
import billeteLleno from '../images/globales/billeteLleno.png'
import Browser from '../components/Browser'
import Puntajes from '../components/Puntajes'



class Itinerary extends React.Component{

    state = {
        itineraries: [],
        ciudad:[]
    }

    async componentDidMount() {
        const buscarId = this.props.match.params.id
        const actividadBuscada = await axios.get(`http://127.0.0.1:4000/api/itinerario/${buscarId}`)
        const idCiudades = await axios.get(`http://127.0.0.1:4000/api/itinerario/${buscarId}`)
        this.setState({
            itineraries:actividadBuscada.data.actividadId,
            ciudad:idCiudades.data.idCiudad
        })
    }

    render(){

        return (
    <>
    <Menu />
    
    {this.state.ciudad.map(city => { 
    return (
    <Destinos valor = {city}/>   
    )
})} 


{!this.state.itineraries.length && ( 
    <Error />
)}


{this.state.itineraries.map(act=> {
    return (
    <Puntajes valor ={act}/>
    )
})}


    <div style={{display:'flex',justifyContent:'center'}}> 
        <NavLink to ="/"><Browser archivo = "carrera"/></NavLink>
        <NavLink to ="/ciudades"><Browser archivo = "recargar"/></NavLink>
    </div>  
    
    </>
 
        )
    }
}

export default Itinerary