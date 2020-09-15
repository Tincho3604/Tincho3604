import React from "react";
import Cards from './Cards'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BootstrapCarouselComponent extends React.Component {

    state = {
        informacion: [
          {imagen:'casa1', precio:'1.400.00',texto:'Excelente departamento en barrio parque o palermo chico, uno de los mas exclusivos barrios. A dos cuadras del shopping Alcorta.',metros:250, camas:4, baños: 5},
          {imagen:'casa2', precio:'1.688.000',texto:'Excelente departamento en barrio parque o palermo chico, uno de los mas exclusivos barrios. A dos cuadras del shopping Alcorta.',metros:300, camas:7, baños: 3},
          {imagen:'casa3', precio:'1.300.000',texto:'Excelente departamento en barrio parque o palermo chico, uno de los mas exclusivos barrios. A dos cuadras del shopping Alcorta.',metros:211, camas:3, baños: 2},
          {imagen:'casa4', precio:'1.266.000',texto:'Excelente departamento en barrio parque o palermo chico, uno de los mas exclusivos barrios. A dos cuadras del shopping Alcorta.',metros:200, camas:2,  baños: 2 }
        ]
      }

    render() {
    return (   
                <div className='container-fluid' >
                  
                        
         
             
        <Carousel>
        {this.state.informacion.map(info => {
            return (
        <Carousel.Item>   
                <Cards info={info}/>
        </Carousel.Item>
   )
})} 
        </Carousel>    
         
        
        
        </div>
            );
        }
    }

export default BootstrapCarouselComponent;