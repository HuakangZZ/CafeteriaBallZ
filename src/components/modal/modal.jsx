import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal({ totalDeProductos, totalDePrecios, listaDeIds, ...props }) {

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
        {listaDeIds.map((item) => 
          (<div key={item[0].id}>
            <div className='producto-contenedor'>
              <h4>{item[0].title}</h4>
              <p><b>Cantidad:</b> {item[1]}</p>
              <p><b>Precio:</b> {item[2]}</p>
            </div>

          </div>)
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;