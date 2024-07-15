import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import goku from '../../assets/personajes/GokuUI.png'
import krillin from '../../assets/personajes/Krilin.webp'
import piccolo from '../../assets/personajes/piccolo.png'
import yamcha from '../../assets/personajes/yamcha.webp'
import { BsBorderBottom } from 'react-icons/bs';

function MyVerticallyCenteredModal({ totalDeProductos, totalDePrecios, listaDeIds, ...props }) {

  let imagenWidth = 0
  let imagenHeight = 0

  const imagenParaPrecio = () => {
    if (totalDePrecios >= 1000 && totalDePrecios < 3500) {
      imagenWidth = 200
      imagenHeight = 200
      return yamcha
    }
    else if (totalDePrecios >= 3500 && totalDePrecios < 5000) {
      imagenWidth = 200
      imagenHeight = 250
      return krillin
    }
    else if (totalDePrecios >= 5000 && totalDePrecios < 7000){
      imagenWidth = 250
      imagenHeight = 300
      return piccolo
    }
    else if (totalDePrecios >= 7000){
      imagenWidth = 300
      imagenHeight = 300
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
        <div className='contenedor-carrito' style={{display:'flex', justifyContent:'space-evenly'}}>
          <div>
            {listaDeIds.map((item) => 
              (<div key={item[0].id} style={{borderBottom:"thin solid gray", marginTop:10}}>
                <div>
                  <div>
                    <h4>{item[0].title}</h4>
                    <p><b>Cantidad:</b> {item[1]}</p>
                    <p><b>Precio:</b> ${item[2]}</p>
                  </div>
                </div>
              </div>)
            )}
          </div>
          <div>
            <h2><b>Total:</b> ${totalDePrecios}</h2>
            <img src={imagenParaPrecio()} alt="" width={imagenWidth} height={imagenHeight}/>
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