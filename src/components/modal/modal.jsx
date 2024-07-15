import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import goku from '../../assets/personajes/GokuUI.png'
import krillin from '../../assets/personajes/Krilin.webp'
import piccolo from '../../assets/personajes/piccolo.png'
import yamcha from '../../assets/personajes/yamcha.webp'

function MyVerticallyCenteredModal({ totalDeProductos, totalDePrecios, listaDeIds, ...props }) {

  let imagen = ""

  const imagenParaPrecio = () => {
    if (totalDePrecios >= 1000 && totalDePrecios < 3500) {
      return yamcha
    }
    else if (totalDePrecios >= 3500 && totalDePrecios < 5000) {
      return krillin
    }
    else if (totalDePrecios >= 5000 && totalDePrecios < 7000){
      return piccolo
    }
    else if (totalDePrecios >= 7000){
      return goku
    }
  }



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='fondo'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          CARRITO
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='contenedor-carrito'>
          {listaDeIds.map((item) => 
            (<div key={item[0].id}>
              <div>
                <div className='producto-contenedor'>
                  <h4>{item[0].title}</h4>
                  <p><b>Cantidad:</b> {item[1]}</p>
                  <p><b>Precio:</b> ${item[2]}</p>
                </div>
              </div>
            </div>)
          )}
          <div>
            <h2><b>Total:</b> ${totalDePrecios}</h2>
            <img src={imagenParaPrecio()} alt="" width="200" height="200"/>
          </div>
          
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;