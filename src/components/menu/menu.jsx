import { useEffect, useState } from "react";
import "./menu.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import goku from '../../assets/menu/goku.gif'

function Menu({totalDeProductos, totalPrecio, totalActual, precioActual,listaDeIds}){
    const [data, setData] = useState(null);
    let contadorId = 0;
    let totalProductos = totalActual;
    let totalPrecios = precioActual

    const generarId = () => {
        contadorId++
        return contadorId.toString();
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

                                <Button className="boton" onClick={() => {
                                    const elemento = document.getElementById(item.id);
                                    let valor = Number(elemento.textContent)
                                    elemento.textContent = valor + 1
                                    totalProductos = totalProductos + 1
                                    totalPrecios = totalPrecios + listaDePrecio[item.id - 1]
                                    totalDeProductos(totalProductos)
                                    totalPrecio(totalPrecios)
                                    listaDeIds.push(item.id)
                                }}>+</Button>


                                <p className="contador" id={generarId()}>{0}</p>


                                <Button className="boton" onClick={() => {
                                    const elemento = document.getElementById(item.id);
                                    let valor = Number(elemento.textContent)
                                    if (valor > 0) {
                                        elemento.textContent = valor - 1
                                        totalProductos = totalProductos - 1
                                        totalPrecios = totalPrecios - listaDePrecio[item.id - 1]
                                        totalDeProductos(totalProductos)
                                        totalPrecio(totalPrecios)
                                    }
                                }}>-</Button>



                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );


}

export default Menu;