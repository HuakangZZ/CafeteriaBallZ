import './App.css'
import Header from './components/header/header'
import Presentacion from './components/presentacion/presentacion'
import Contacto from './components/contacto/contacto'
import Menu from './components/menu/menu'

function App() {
  return (
    <div>
      <Header/> 
      <Presentacion/>
      <Contacto/>
      <Menu/>
    </div>
  )
}

export default App
