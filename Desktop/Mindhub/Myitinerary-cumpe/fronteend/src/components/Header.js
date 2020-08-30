import React from 'react'


class Header extends React.Component{
    render(){
        const logo = require('../images/globales/logo.png')
        return( 
    
    
    <>

<section className="banner">
<img src={logo} className="logo" alt="Logo"/>
<div className="banner-content">
        <div className="cabecera">
        <p id="textoIntro">{this.props.texto}</p>
        </div>
        </div>
</section> 

        </>
        )
    }
}

export default Header