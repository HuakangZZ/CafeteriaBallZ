import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal-ingredientes.css';
import goku from '../../assets/ingredientes/goku-dance.gif'

function ModalIngredientes({itemValue, ...props}) {

  const getNombre = () => {
    if (itemValue != null) {
      return <h1>{itemValue.title.toUpperCase()}</h1>
    }
  }

  const getIngredientes = () => {
    if (itemValue != null) {
      return itemValue.ingredients.map(ingrediente => (
        <li>{ingrediente}</li>
      ))
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='fondo-modal-ingredientes'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {getNombre()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='body-ingredientes'>
        <div>
          <h2>Ingredientes:</h2>
          <ul>
            {getIngredientes()}
          </ul>
        </div>
        <img src={goku} alt="" width="150" height="200"/>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalIngredientes;