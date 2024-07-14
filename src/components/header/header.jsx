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

function Header({totalDeProducts, totalPrecios}) {
  let totalProductos = totalDeProducts
  let totalPrecio = totalPrecios

    return (
      <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor: "#7EFBD1"}}>
        <Container fluid>
          <Navbar.Brand href="../../index.html">
          <div className='imagen-hover'></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div className='flex-header'>
                <Nav.Link href="#contacto">CONTACTO</Nav.Link>
                <Nav.Link href="#menu">CARTA/MENU</Nav.Link>
                <Nav.Link href="">NIVEL DE PODER</Nav.Link>
              </div>
            </Nav>
            <button className='boton-header'>
              <div className='contenedor-shopping-cart'>
                <div className='burbujita'>
                  <p>{totalProductos}</p>
                </div>
                <FaShoppingCart className='shopping-cart'/>
              </div>
            </button>
            
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Buscar"
                onClick={console.log(totalPrecios)}
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    )
}

export default Header;
  