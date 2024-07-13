import "./footer.css"
import esfera2 from "../../assets/esfera para maps/2estrellas.png"

function Footer() {
    return(
        <footer className="footer-content">
            <ul className="lista-integrantes">
                <div className="esfera-nombre">
                    <img src={esfera2} alt=""  width="50"/>
                    <li><b>Nombre:</b> Diego Matallana, <b>Dni:</b> 42690092</li>
                </div>
                <div className="esfera-nombre">
                    <img src={esfera2} alt=""  width="50"/>
                    <li><b>Nombre:</b> Diego Matallana, <b>Dni:</b> 42690092</li>
                </div>
                <div className="esfera-nombre">
                    <img src={esfera2} alt=""  width="50"/>
                    <li><b>Nombre:</b> Diego Matallana, <b>Dni:</b> 42690092</li>
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