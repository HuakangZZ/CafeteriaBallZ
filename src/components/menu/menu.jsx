import { useEffect, useState } from "react";
import "./menu.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import goku from '../../assets/menu/goku.gif'

function Menu(){
    const [data, setData] = useState(null);

    const crearContador = () =>{
        let contador = 0
        return contador
    }

    const sumar = (item) => {
        const contator = document.getElementById(item);
        let valor = Number(contator.textContent);
        contator.textContent = valor + 1
    }

    const restar = (item) => {
        const contator = document.getElementById(item);
        let valor = Number(contator.textContent);
        if (valor > 0) {
            contator.textContent = valor - 1
        }
    }
    const clw = () => {
        console.log(window.innerWidth)
    }
    useEffect(() => {
        fetch("https://api.sampleapis.com/coffee/hot")
        .then((response) => response.json())
        .then((data) => setData(data));
    },[]);

    const listaDePrecio = [(1,1000),(2,1500),(3,2300),(4,2500),(5,3300),(6,1900),(7,2100),(8,3700),(9,2400),(10,1972),(11,1986),(12,2022),(13,3425),(14,2455),(15,2400),(16,2300),(17,1222),(18,3550),(19,4214),(20,9000)]
    return(
        <div className="contenedor-menu">
            <div className="contenedor-titulo">
                <img src={goku} width="200" height="200"/>
                <h2 className="titulo-menu">MENU</h2>    
            </div>
            <div className="grid" id="menu">
                {data?.map((item) => (
                    <Card key={item.id} className="card">
                        <Card.Img src={item.image} className="card-image"/>
                        <Card.Body className="card-body">
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text><b>Precio:</b>$ {listaDePrecio[item.id - 1]}</Card.Text>
                            <div className="contenedor-contador">
                                <Button className="boton" onClick={sumar(item.id)}>+</Button>
                                <p className="contador" id={item.id}>{0}</p>
                                <Button className="boton" onClick={restar(item.id)}>-</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );


}

export default Menu;