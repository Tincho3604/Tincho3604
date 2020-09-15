import React from 'react'
import {Form, NavDropdownItem,Container,Row,Col,Card,CardHeader } from 'react-bootstrap';
class Filtro extends React.Component {
    render(){
        return(
    <>
    <div className="filtro">
                <Card.Body>BIENVENIDO A TU NUEVA CASA.<br/>
                Comprá, alquilá o vendé inmuebles en Argentina</Card.Body>
                <div className="sec">
                
                <div class="venta">
                    <p>Venta</p>
                </div>

                <div class="alquiler"> 
                    <p>Alquiler</p>
                </div>
            </div>
                <Row>
                    <Col> <Form.Control as="select" size="lg">
                                <option>Large select</option>
                            </Form.Control>
                    </Col>
                    
                    <Col>
                            <Form.Control size="lg" type="text" placeholder="Zona, Ciudad, Provincia..." />
                    </Col>
                    
                    <Col style={{paddingRight:'30px'}}>
                            <Form.Control size="lg" type="number" placeholder="Precio" />
                    </Col>
                
                </Row>
            
        </div>
  
        
    </>
        )
    }
}

export default Filtro