import './App.css'
import Header from './components/header/header'
import Presentacion from './components/presentacion/presentacion'
import Contacto from './components/contacto/contacto'
import Menu from './components/menu/menu'
import Footer from './components/footer/footer'
import { useState } from 'react'

function App() {
  const [total, establecerTotal] = useState(0);
  const [precio, establecerPrecio] = useState(0);

  const [lista, establecerLista] = useState([])

  const totalDeProductos = (datosTotalDeProductos) =>{
    establecerTotal(datosTotalDeProductos)
  }
  const totalPrecio = (datosTotalPrecio) =>{
    establecerPrecio(datosTotalPrecio)
  }

  const listaDeIds = (datos)

  return (
    <div>
      <Header totalDeProducts={total} totalPrecios={precio} listaDeIds={lista}/> 
      <Presentacion/>
      <Contacto/>
      <Menu totalDeProductos={totalDeProductos} totalPrecio={totalPrecio} totalActual={total} precioActual={precio} listaDeIds={lista}/>
      <Footer/>
    </div>
  )
}

export default App
