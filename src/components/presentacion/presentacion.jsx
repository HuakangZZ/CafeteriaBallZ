import cafeteria1 from "../../assets/Local/Local.jpg";
import cafeteria2 from "../../assets/Local/Local2.jpg";
import cafeteria3 from "../../assets/Local/Local3.jpg";
import nosotros from "../../assets/nosotros/Nosotros.png";
import Carousel from 'react-bootstrap/Carousel';
import './presentacion.css'

function Presentacion(){
    return(
      <div className="flex separacion">
          <div className="tamaño fondo-de-carrusel">
            <Carousel>
              <Carousel.Item>
              <a href="https://www.youtube.com/watch?v=mR-qHyPmFm4" target="blank"><img src={cafeteria1} alt="" className="imagen"/></a>
                <Carousel.Caption>
                  <h3>CAFETERIA EN HURLINGAM</h3>
                  <p>Tte. Manuel Origone 151, Villa Tesei, Provincia de Buenos Aires.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <a href="https://www.youtube.com/watch?v=rjJFpeWdJvE" target="blank"><img src={cafeteria2} alt="" className="imagen"/></a>
                <Carousel.Caption>
                  <h3>CAFETERIA MORENO</h3>
                  <p>Av. Bartolomé Mitre 1891, B1744OHC Moreno, Provincia de Buenos Aires.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <a href="https://www.youtube.com/watch?v=yRdGJj68nwA" target="blank"><img src={cafeteria3} alt="" className="imagen"/></a>
                <Carousel.Caption>
                  <h3>CAFETERIA SAN MIGUEL</h3>
                  <p>Domingo Faustino Sarmiento 1551, San Miguel, Provincia de Buenos Aires.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="nosotros">
            <div></div>
            {/*<img src={nosotros} alt="" className="imagen"/>*/}
            <h2 className="titulo-nosotros">Nosotros</h2>
            <p className="texto-nosotros">Hola a todos bienvenidos a nuestra cafeteria Online con tematica de Dragon ball.
              Nuestra cafeteria se origino en Hurlingham pero ya nos expandimos, y tenemos varias sucursales en zonas cercanas
              como San Miguel o Moreno.
            </p>
            <p className="texto-nosotros">La cafeteria fue una idea originaria de un trabajo entre compañeros universitarios (Patricio, Hernan, Franco y Diego), y hoy en dia podemos
              decir que lo que una vez fue una mera idea hoy es una realidad y tambien nuestro trabajo. 
            </p>

          </div>
      </div>
      
        
    );
}

export default Presentacion;