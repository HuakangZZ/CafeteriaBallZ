import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal-personajes.css'

function ModalPersonajes({nombre,...props}) {
  const [data, setData] = React.useState(null);
  let hayPersonaje = false;

  let personajeElegido = {
    name: "No existe"
  };

  React.useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
    .then((response) => response.json())
    .then((data) => setData(data.items));
  },[]);

  const buscarPersonaje = () => {
    data.items.forEach(personaje => {
      if (personaje.name.toLowerCase() == nombre.toLowerCase()) {
        hayPersonaje = true;
        personajeElegido = personaje;
      }
    });
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
          PERSONAJE ELEGIDO
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='fondo-body-modal'>
        <div>
          {data?.map( (personaje) =>{
            if (personaje.name.toLowerCase() == nombre) {
              return <div key={personaje.id}>
                <h2>{personaje.name}</h2>
                <p><b>KI:</b> {personaje.ki}</p>
                <p><b>MAX-KI:</b> {personaje.maxKi}</p>
                <p><b>RAZA:</b> {personaje.race}</p>
                <div><p><b>IMAGEN:</b></p><img src={personaje.image} alt="" width="250" height="400" className=''/></div>
                <p><b>DESCRIPCION:</b> {personaje.description}</p>
              </div>
            }
          })}
        </div>
        
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPersonajes;