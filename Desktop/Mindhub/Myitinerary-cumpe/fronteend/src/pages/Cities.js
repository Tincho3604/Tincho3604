import React from 'react'
import Menu from '../components/Menu'
import Browser from '../components/Browser'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from '../components/Footer'
import Itinerary from './Itinerary'
import Destinos from '../components/Destinos'





class Cities extends React.Component{

    state = {
        datos:[],
        datosFilter:[]
}

        async componentDidMount (){
        
            const respuesta = await axios.get('http://127.0.0.1:4000/api/ciudades')
            const listado = await respuesta.data.lista
            this.setState({
            datos:listado,
            datosFilter:listado
            })
        }

    obtenerValor = e => {
        const valorInput = e.target.value.trim()
        const filtrados= this.state.datos.filter(dato => dato.ciudad.toLowerCase().indexOf(valorInput.toLowerCase()) === 0) 
        this.setState({
            datosFilter:filtrados
        })
    }


    render(){    



        return( 
            <>

            <Menu/>

            <div className="total">
            <NavLink to ="/"><Browser archivo = "carrera"/></NavLink>
            
    <div className="container">

        <div className="contenedor-inputs">
            <input type="text" id="nombre" name="nombre" onChange={this.obtenerValor}  placeholder="Buscar ciudades" className="input-48"  required/>
        </div>
    </div> 

    {this.state.datosFilter.map(item => {
    return (

<Link to={`/actividades/${item._id}`}>

    <Destinos valor={item}/>

</Link>     
)
})}



<Footer/>
</div>
        </>

        )
    }
}

export default Cities 