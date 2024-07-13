import './App.css'
import Header from './components/header/header'
import Presentacion from './components/presentacion/presentacion'
import Contacto from './components/contacto/contacto'
import Menu from './components/menu/menu'
import Footer from './components/footer/footer'

function App() {
  return (
    <div>
      <Header/> 
      <Presentacion/>
      <Contacto/>
      <Menu/>
      <Footer/>
    </div>
  )
}

export default App
