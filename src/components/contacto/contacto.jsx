import "./contacto.css"
import radar from "../../assets/contacto/radar.gif"
import flecha from "../../assets/contacto/flecha.gif"

function Contacto(){
    return (
        <div className="contacto-container">
            <div className="texto-container">
               <h2 className="titulo">CONTACTO</h2>
               <ul className="lista">
                   <li><b>WhatsApp San Miguel:</b> 1122334455</li>
                   <li><b>WhatsApp Hurlingham:</b> 1133224455</li>
                   <li><b>WhatsApp Moreno:</b> 1144332255</li>
                   <li><b>Horarios:</b> 8:00 am | 22:00 pm</li>
                   <li><b>Email:</b> cafeballz@gmail.com</li>
               </ul>
               <div>
                   <img className="radar" src={radar} alt="" />
                   <img className="radar" src={flecha} alt="" />
               </div>
               
            </div>
            <div className="iframe-container">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1nVuOMwwKevWaV1PMFqCzhROuW5U7C-E&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
            </div>
        </div>
    );
}

export default Contacto;