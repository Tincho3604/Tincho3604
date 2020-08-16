import React from 'react'


class Header extends React.Component{
    render(){
        // const foto = require('../images/usuario.jpg')
        const logo = require('../images/logo.png')
        return( 
      
      
      <>

<section className="banner">
<img src={logo} className="logo" alt="Logo"/>
<div className="banner-content">
        <div className="cabecera">
            <p id="textoIntro">Encuentra tu viaje perfecto diseñado por guias que conocen y aman sus ciudades.</p>
        </div>
        </div>
</section> 

        </>
        )
    }
}

export default Header