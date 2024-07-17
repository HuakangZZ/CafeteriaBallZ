import cafeteria1 from "../../assets/Local/Local.jpg";
import cafeteria2 from "../../assets/Local/Local2.jpg";
import cafeteria3 from "../../assets/Local/Local3.jpg";
import nosotros from "../../assets/nosotros/Nosotros.png";
import Carousel from 'react-bootstrap/Carousel';
import './presentacion.css'

function Presentacion(){
    return(
      <div className="flex separacion">
          <div className="tamaño">
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
            <p className="texto-nosotros">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati modi, eius eos accusamus aliquid ea, dolorum totam impedit dolorem cumque, voluptatibus esse sint similique! Unde vel ratione dolor obcaecati atque!</p>
            <p className="texto-nosotros">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati modi, eius eos accusamus aliquid ea, dolorum totam impedit dolorem cumque, voluptatibus esse sint similique! Unde vel ratione dolor obcaecati atque!</p>
            <p className="texto-nosotros">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati modi, eius eos accusamus aliquid ea, dolorum totam impedit dolorem cumque, voluptatibus esse sint similique! Unde vel ratione dolor obcaecati atque!</p>
            <p className="texto-nosotros">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati modi, eius eos accusamus aliquid ea, dolorum totam impedit dolorem cumque, voluptatibus esse sint similique! Unde vel ratione dolor obcaecati atque!</p>
          </div>
      </div>
      
        
    );
}

export default Presentacion;