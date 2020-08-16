import React from 'react'





function Menu(){
  const foto = require('../images/usuario.jpg')
 
  
  return( 
    <nav>


          <div className="hamburguesa">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div> 


        <ul className="links">
          <img src={foto} alt="Imagen Usuario"/> 
            <li><a href="#">A Confirmar...</a></li>
            <li><a href="#">A Confirmar...</a></li>
            <li><a href="#">A confirmar...</a></li>
         
          </ul> 
      </nav> 
        
        
        
        )  
  }

 export default Menu
