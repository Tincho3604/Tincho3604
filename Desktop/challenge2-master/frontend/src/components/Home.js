import React from 'react'
import {Image ,FormControl,Form,ListGroupItem, ListGroup, Navbar, Button, Nav, NavLink, NavDropdown, NavDropdownItem,Container,Row,Col,Card,CardHeader } from 'react-bootstrap';
import Menu from './Menu'
import Cards from './Cards'
import Filtro from './Filtro'
import Carousel from './Carousel';
import Footer from  './Footer'
import "react-alice-carousel/lib/alice-carousel.css";

class Home extends React.Component{
  
state = {
  informacion: [
    {imagen:'casa1', precio:'1.400.00',texto:'Excelente departamento en barrio parque o palermo chico, uno de los mas exclusivos barrios. A dos cuadras del shopping Alcorta.',metros:250, camas:4, baños: 5},
    {imagen:'casa2', precio:'1.688.000',texto:'Excelente departamento en barrio parque o palermo chico, uno de los mas exclusivos barrios. A dos cuadras del shopping Alcorta.',metros:300, camas:7, baños: 3},
    {imagen:'casa3', precio:'1.300.000',texto:'Excelente departamento en barrio parque o palermo chico, uno de los mas exclusivos barrios. A dos cuadras del shopping Alcorta.',metros:211, camas:3, baños: 2},
    {imagen:'casa4', precio:'1.266.000',texto:'Excelente departamento en barrio parque o palermo chico, uno de los mas exclusivos barrios. A dos cuadras del shopping Alcorta.',metros:200, camas:2,  baños: 2 }
  ]
}


    render(){
        return(
            <>

       <Menu/>

<Container fluid >
    <Row >
        <Col>
        <section className="banner">
            <div className="banner-content">
        <Filtro />
            </div>
        </section> 
        </Col>
    </Row>
</Container>


<Container>
  
  <Row style={{marginTop:'10vh'}}>
    <Col xs={6} md={4}>
      <Image src={require("../images/home/icono1.png")} rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src={require("../images/home/icono2.png")} rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image  style={{height:'15vh', marginLeft:'10vh', marginBottom:'1vh'}} src={require("../images/home/icono3.png")} rounded />
    </Col>
  </Row>
</Container>

<Card style={{textAlign:'center',background:'rgb(229, 241, 240)' ,fontFamily: 'Orbitron'}}body>NUESTROS ANUNCIOS RECOMENDADOS</Card>


<div className="container-fluid d-flex justify-content-center">
  <div className="row">
  {this.state.informacion.map(valor => (
        <div className="col-md-4">
        <Cards info={valor}/>
         {/* <Carousel />  */}
      </div>
  ))}  
      </div>
 </div> 









 

<Footer/>
 
            </>
        
        )
    }
}


export default Home




