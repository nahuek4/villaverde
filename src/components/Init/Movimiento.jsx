import { Fade } from "react-awesome-reveal"
import BannerMov from "./BannerMov"

const Movimiento = () => {
    return (
        <div className="movInitComp">
            <div className="movimiento">
                <div className="contenidomov">
                    <Fade
                        direction="up"
                        delay={-150}
                        cascade
                    >
                        <div className="textoMov">
                            <h2 className="textMov">Únete al <span>movimiento</span></h2>
                            <p>Una de las formas más poderosas de conectar con el bienestar, es el movimiento</p>
                            <br />

                            <p>Soy <span>Damián Villaverde</span>, fisioterapeuta entrenador y docente  de Buenos Aires Argentina

                                Durante los últimos 25 años, ayudé a cientos de personas activas y deportistas de todos
                                los niveles con un sistema propio e interdisciplinario que integra diferentes especialidades.
                                No importa si querés mejorar tu condición fisica, rehabilitar una lesión o llevar tu rendimiento
                                al próximo nivel; el Método Villaverde es un proceso continuo y personalizado.
                            </p>
                            <p>Diseñado en <span>cuatro niveles:</span></p>
                            <br />

                            <ul>
                                <li>
                                    Aliviar el dolor
                                </li>
                                <li>Recuperar la función</li>
                                <li>Optimizar el movimiento</li>
                                <li>Potenciar el rendimiento</li>
                            </ul>
                        </div>

                        <div className="botonMov">
                            <a href="../../pages/About.jsx"><button>Conocé MVV</button></a>
                        </div>
                    </Fade>
                </div>

            </div>
            <BannerMov />
        </div >
    )
}

export default Movimiento
