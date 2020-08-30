import React from 'react'

function Menu(){
  const foto = require('../images/globales/usuario.jpg')
  

  return( 
    <nav>

  <ul className="links">


  <div className="dropdown">
      <button className="dropbtn">
    
      <a href="#"><img src={foto} alt="Imagen Usuario"/></a> 
    
      </button>
    
    <div className="dropdown-content">
  
      <a href="#">Create Account</a>
      <a href="#">Log In</a>

    </div>
  </div>

            <li><a href="#">A Confirmar...</a></li>
            <li><a href="#">A Confirmar...</a></li>
            <li><a href="#">A confirmar...</a></li>
    </ul> 




<div className="hamburguesa" style={{float:"right"}}>
  <div className="dropdown">

    <button className="dropbtn">
  
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    
    </button>
  <div className="dropdown-content">

    <a href="#">A confirmar...</a>
    <a href="#">A confirmar...</a>
    <a href="#">A confirmar...</a>
    
    </div>
  </div>
</div>

      </nav> 

        )  
  }

export default Menu
