import React from 'react'
import Header from '../components/Header';
import Menu from '../components/Menu';
import Browser from '../components/Browser';
import Carousel from '../components/Carousel';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer'

class Home extends React.Component{
    render(){
        return( 
            <>
        
            <Menu/>
        
            <Header texto='Encuentra tu viaje perfecto diseñado por guias que conocen y aman sus ciudades.'/>
        
            <NavLink to ="/ciudades"><Browser archivo = "flecha"/></NavLink>

            <Carousel/>
            
            <Footer />
            </>
        )
    }
}

export default Home 