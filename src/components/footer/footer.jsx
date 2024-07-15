import "./footer.css"
import esfera2 from "../../assets/esfera para maps/2estrellas.png"

function Footer() {
    return(
        <footer className="footer-content">
            <ul className="lista-integrantes">
                <div className="esfera-nombre">
                    <img src={esfera2} alt=""  width="50"/>
                    <li><b>Nombre:</b> Patricio Dubuis, <b>Dni:</b> 43720578</li>
                </div>
                <div className="esfera-nombre franco-diego">
                    <img src={esfera2} alt=""  width="50"/>
                    <li><b>Nombre:</b> Franco Prezioso, <b>Dni:</b> 42030540</li>
                </div>
                <div className="esfera-nombre franco-diego">
                    <img src={esfera2} alt=""  width="50"/>
                    <li><b>Nombre:</b> Hernan Cardachi, <b>Dni:</b> 25970424</li>
                </div>
                <div className="esfera-nombre">
                    <img src={esfera2} alt=""  width="50"/>
                    <li><b>Nombre:</b> Diego Matallana, <b>Dni:</b> 42690092</li>
                </div>
            </ul>
        </footer>
    )
}

export default Footer;