import React from 'react'
import {ListGroupItem, Card,CardHeader,Button,Row,Col,Container,Carousel,CarouselItem } from 'react-bootstrap';


class Cards extends React.Component{
render(){
    return(
        <>
<div className="cards text-center">
  <div className="overflow">
  <Card.Img variant="top" className="cards-img-top" src={require(`../images/casas/${this.props.info.imagen}.png`)} />
    <div className="cards-body text-dark">
      <Card.Title className="card-text text-secondary">{this.props.info.texto}</Card.Title>
      <ListGroupItem>USD {this.props.info.precio}</ListGroupItem>
      <Container>
<Row>
  <div className="logitos">
      <Col xs={{ order: 1 }}>{this.props.info.camas}<img src={require("../images/casas/bano.png")}/></Col>
      <Col xs={{ order: 1 }}>{this.props.info.baños}<img src={require("../images/casas/cama.png")}/></Col>
  </div> 
       </Row>
</Container>
<button className="btn">Información</button>
    </div>
  </div>
</div> 
        </>
        )
    }
}

export default Cards





