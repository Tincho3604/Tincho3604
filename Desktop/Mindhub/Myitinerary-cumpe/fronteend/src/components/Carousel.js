
import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BootstrapCarouselComponent extends React.Component {

    state = {
        ciudades:[
            ["San Luis","Cordoba","Bariloche","Mendoza"],    
            ["Formosa","Jujuy","Salta","Tucuman"],
            ["Corrientes","Entre Rios","Misiones","Santa fe"]
        ]
    }

    render() {
    return (   
                <div className='container-fluid' >
                    <div className="col">
                        <div className="col-sm-12">
                            <h3>Disfrutá al máximo tu destino</h3>
                    </div>
         

        <Carousel>
        {this.state.ciudades.map(cajita => {
            return (
            <Carousel.Item>   

    {cajita.map(cont => { 
        return (
<div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="contenedor">
                
                <figure>
              
                    <img src={require(`../images/slider/${cont}.png`)} className="img-responsive" />
                
                    <div className="capa">
                        <h3>{cont}</h3>
                    </div> 
                </figure>
                
                </div>
            </div>
        </div>
    </div>    


        )
    })}     

        </Carousel.Item>
    )
})} 
        </Carousel>    
        </div>
        </div>
            );
        }
    }

export default BootstrapCarouselComponent;


