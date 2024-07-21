import { useEffect, useState } from "react";
import "./menu.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import goku from '../../assets/menu/goku.gif'
import ModalIngredientes from "../modal-ingredientes/modal-ingredientes";

function tieneAlguno(params,listaIds) {
    let valor = false
    listaIds.forEach(x => {
        if (params[0] == x[0]) {
            valor = true 
        }
    })
    return valor
}

function ajustarValor(params,listaIds){
    listaIds.forEach(x => {
        if (params[0] == x[0]) {
            x[1] = params[1] 
        }
    })
}

function sumar(item,totalActual,precioActual,listaDePrecio,listaIds, totalDeProductos, totalPrecio, listaDeIds){
    let totalProductos = totalActual;
    let totalPrecios = precioActual;
    
    const elemento = document.getElementById(item.id);
    let valor = Number(elemento.textContent)
    elemento.textContent = valor + 1
    totalProductos++
    totalPrecios = totalPrecios + listaDePrecio[item.id - 1]
    if (totalProductos > 0 && !tieneAlguno([item,valor+1,listaDePrecio[item.id - 1]],listaIds)) {
        listaIds.push([item,valor+1,listaDePrecio[item.id - 1]])
    }
    else{
        if(tieneAlguno([item,valor+1],listaIds)) {
            ajustarValor([item,valor+1,listaDePrecio[item.id - 1]],listaIds)
        }
    }
    console.log(listaIds)
    totalDeProductos(totalProductos)
    totalPrecio(totalPrecios)
    listaDeIds(listaIds);
}

function restar(item,totalActual,precioActual,listaDePrecio,listaIds, totalDeProductos, totalPrecio, listaDeIds){
    let totalProductos = totalActual;
    let totalPrecios = precioActual;
    
    const elemento = document.getElementById(item.id);
    let valor = Number(elemento.textContent)
    if (valor > 0) {
        elemento.textContent = valor - 1
        totalProductos--
        totalPrecios = totalPrecios - listaDePrecio[item.id - 1]
        if(tieneAlguno([item,valor+1,listaDePrecio[item.id - 1]],listaIds)) {
            ajustarValor([item,valor-1,listaDePrecio[item.id - 1]],listaIds)
        }
        if (tieneAlguno([item,valor-1,listaDePrecio[item.id - 1]],listaIds) && Number(elemento.textContent) == 0){
            let indice = listaIds.filter(itemazo => itemazo[0] != item);
            listaDeIds(indice);
        }   
        totalDeProductos(totalProductos)
        totalPrecio(totalPrecios)
    }
    
}



function Menu({totalDeProductos, totalPrecio, listaDeIds, totalActual, precioActual, listaActual}){
    const [data, setData] = useState(null);
    const [modalIngredientesShow, setModalIngredientesShow] = useState(false);
    const [valorProducto, setValorProducto] = useState(null)
    let contadorId = 0;
    let listaIds = listaActual;

    const enviarItem = (valor) => {
        setValorProducto(valor)
        setModalIngredientesShow(true)

    }


    const generarId = () => {
        contadorId++
        return contadorId.toString();
    }

    const clw = () => {
        console.log(window.innerWidth)
    }

    function noLoContiene(params) {
        listaIds.forEach(x => {
            let valor = true
            if (x[0] == params) {
                valor = false
            }
            return valor;
        })

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
                        <a onClick={() => {enviarItem(item)}} className="enlace-ingredientes">
                            <Card.Img src={item.image} className="card-image"/>
                        </a>
                        <Card.Body className="card-body">
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text><b>Precio:</b>$ {listaDePrecio[item.id - 1]}</Card.Text>
                            <div className="contenedor-contador">

                                <Button className="boton" onClick={() => {
                                    sumar(item,totalActual,precioActual,listaDePrecio,listaIds, totalDeProductos, totalPrecio, listaDeIds)
                                }}>+</Button>


                                <p className="contador" id={generarId()}>{0}</p>


                                <Button className="boton" onClick={() => {
                                    restar(item,totalActual,precioActual,listaDePrecio,listaIds, totalDeProductos, totalPrecio, listaDeIds)
                                }}>-</Button>



                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>

            <ModalIngredientes
            itemValue = {valorProducto}
            show={modalIngredientesShow}
            onHide={() => {setModalIngredientesShow(false);} }
            className="margin-modal"
            />
        </div>
    );


}

export default Menu;