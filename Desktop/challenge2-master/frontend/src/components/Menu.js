import React from 'react'
import {Navbar, Button, Nav, NavLink, NavDropdown, NavDropdownItem } from 'react-bootstrap';



class Menu extends React.Component{
    
    render() { 

        return (
    <>
    <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
    <Navbar.Brand href="#home">
    <img class="logo" src={require('../images/home/descarga.png')}/> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    {/* <NavDropdown title="¿Que sección quieres visitar?" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.2">Casas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Departamentos</NavDropdown.Item>
    </NavDropdown> */}
    </Nav>
    <Nav>
    <Nav.Link href="#deets">
        <button className="login">Login
            <img className="loguitos" src={require('../images/home/usuario.png')}/>
        </button>
    </Nav.Link>
    <Nav.Link eventKey={2} href="#memes">
        <button className="login">Create Account
            <img className="loguitos" src={require('../images/home/iniciar-sesion.png')}/>
        </button>
        </Nav.Link>
        </Nav>
       
    </Navbar.Collapse>
</Navbar>
</>
        )    
    }
}
export default Menu


