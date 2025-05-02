import { Fade, Slide } from "react-awesome-reveal";
import Galeria from "./Galeria"

const Mvv360 = () => {
    return (
        <div className="mvv360Comp">
            <Slide direction="right" delay={300}>
                <div className="mvv360Back">
                    <Fade direction="up" delay={200} cascade>
                        <div className="contenidoMvv360">
                            <div className="text">
                                <h2>CURSOS & WEBINARS</h2>
                                <p>Conoce mis próximos cursos y sé parte de</p>
                                <p>una nueva generación de profesionales responsables</p>
                                <p>que identifica, evalúa y toma decisiones</p>
                                <p>basadas en la más actualizada evidencia certificada</p>
                                <p>para el bienestar y rendimiento de tus deportistas.</p>
                            </div>
                            <div className="botonMvv360">
                                <a href=""><button>Conocé más</button></a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </Slide>
            <Galeria />
        </div>
    )
}

export default Mvv360;