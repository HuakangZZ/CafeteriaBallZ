import { useEffect, useState } from "react";
import "./menu.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Menu(){
    const [data, setData] = useState(null);
    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    useEffect(() => {
        fetch("https://api.sampleapis.com/coffee/hot")
        .then((response) => response.json())
        .then((data) => setData(data));
    },[]);



    return(
        <div className="grid">
            {data?.map((item) => (
                <Card key={item.id} className="card">
                    <Card.Img src={item.image} className="card-image"/>
                    <Card.Body className="card-body">
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <div className="contenedor-contador">
                            <Button className="boton" onClick={sumar}>+</Button>
                            <p className="contador">{contador}</p>
                            <Button className="boton" onClick={restar}>-</Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );


}

export default Menu;