import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/UNAHUR-1.png'
import { FaShoppingCart } from "react-icons/fa";
import MyVerticallyCenteredModal from '../modal/modal';
import ModalPersonajes from '../modal-personajes/modal-personajes';
import React from 'react';

function Header({totalDeProducts, totalPrecios, listaDeIds}) {
  let totalProductos = totalDeProducts
  let totalPrecio = totalPrecios 

  const [modalShow, setModalShow] = React.useState(false);
  const [modalPersonajesShow, setModalPersonajesShow] = React.useState(false);
  const [nombre, establecerNombre] = React.useState("")
  const nombreCompleto = (datosNombreCompleto) => {
    establecerNombre(datosNombreCompleto)
  }

  const reseteate = () =>{
    const inputPers = document.getElementById("input-personajes")

    inputPers.value = ""
  }

    return (
      <div>
          <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor: "#7EFBD1"}}>
          <Container fluid>
            <Navbar.Brand href="../../index.html">
            <div className='imagen-hover'></div>
            </Navbar.Brand>
            <button className='boton-header' onClick={() => setModalShow(true)}>
                <div className='contenedor-shopping-cart'>
                  <div className='burbujita'>
                    <p>{totalProductos}</p>
                  </div>
                  <FaShoppingCart className='shopping-cart'/>
                </div>
            </button>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                navbarScroll
              >
                <div className='flex-header'>
                  <Nav.Link href="#contacto" className='enlace'>CONTACTO</Nav.Link>
                  <Nav.Link href="#menu" className='enlace'>CARTA/MENU</Nav.Link>
                </div>
              </Nav>
              
              <Form className="d-flex">
                <Form.Control
                  id='input-personajes'
                  type="search"
                  placeholder="--Busca un personaje--"
                  className="me-2"
                  aria-label="Ej. Gohan"
                  onChange={(e) => {
                    nombreCompleto(e.target.value)
                  }}
                />
                <Button variant="outline-success" onClick={()=>{setModalPersonajesShow(true);}}>Buscar
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
          
        </Navbar>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        totalDeProductos = {totalDeProducts}
        totalDePrecios = {totalPrecio}
        listaDeIds = {listaDeIds}
        className="margin-modal fondo"
      />

      <ModalPersonajes
      show={modalPersonajesShow}
      onHide={() => {setModalPersonajesShow(false); reseteate()} }
      nombre={nombre}
      className="margin-modal fondo"
      />
      
      </div>
      

      
    )
}

export default Header;
  