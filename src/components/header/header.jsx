import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/UNAHUR-1.png'

function Header() {
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
              <Nav.Link href="#contacto">CONTACTO</Nav.Link>
              <Nav.Link href="#menu">CARTA/MENU</Nav.Link>
              <Nav.Link href="">NIVEL DE PODER</Nav.Link>
            
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Buscar"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;
  