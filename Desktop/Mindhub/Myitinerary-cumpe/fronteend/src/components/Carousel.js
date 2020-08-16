
import React from "react";
import Cajita1 from "./Cajita1"
import Cajita2 from "./Cajita2"
import Cajita3 from "./Cajita3"

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BootstrapCarouselComponent extends React.Component {

    state = {
        ciudades1: ["San Luis","Cordoba","Bariloche","Mendoza"],    
        ciudades2: ["Formosa","Jujuy","Salta","Tucuman"],
        ciudades3: ["Corrientes","Entre Rios","Misiones","Santa fe"]
    }
    
    render() {
    return (
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Disfrutá al máximo tu destino</h3>
                    </div>
                </div>
            
                        
            <Carousel>
                    <Carousel.Item> 
                
                    <div className="row">
                
                        {this.state.ciudades1.map(nombre => {
                        return <div className="col"><Cajita1 data={nombre} /></div>      
                        })}
                    
                    </div>
            </Carousel.Item>
    

                <Carousel.Item>
                    <div className="row">
                
                        {this.state.ciudades2.map(nombre => {
                        return <div className="col"><Cajita2 data={nombre} /></div>      
                        })}
                    </div>  
                </Carousel.Item>

                
                <Carousel.Item>
                    <div className="row">
                
                        {this.state.ciudades3.map(nombre => {
                        return <div className="col"><Cajita3 data={nombre} /></div>      
                        })}
                    </div>  
                </Carousel.Item>
            </Carousel>
        </div>
            )
        };
    }

 export default BootstrapCarouselComponent;


