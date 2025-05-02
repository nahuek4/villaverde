import { Fade } from "react-awesome-reveal";
import Mvv360 from "./Mvv360";

const Beneficios = () => {
    return (
        <div className="beneComp">
            <div className="beneBack">
                <Fade delay={500}>
                    <div className="beneTitulos">
                        <p>Descubrí porque...</p>
                        <h2>El Método Villaverde <span>es tu mejor opción</span></h2>
                    </div>
                </Fade>
                <div className="beneficios">

                    <div className="beneficiosArriba">
                        <Fade delay={800} cascade>
                            <div className="bene bene1">
                                <img src="../../assets/images/movimientoicon.webp" alt="" />
                                <h3>Priorizamos el movimiento</h3>
                                <div className="beneText">
                                    <p>Nuestro enfoque terapéutico se basa en la</p>
                                    <p>calidad de movimiento para optimizar y</p>
                                    <p>recuperar funcionalmente cada estructura</p>
                                    <p>en el menor tiempo posible, garantizando</p>
                                    <p>resultados eficientes y rápidos.</p>
                                </div>
                            </div>

                            <div className="bene bene2">
                                <img src="../../assets/images/confiablesIcon.webp" alt="" />
                                <h3>Datos confiables</h3>
                                <div className="beneText">
                                    <p>Medimos, no adivinamos. Usamos</p>
                                    <p>evaluaciones validadas internacionalmente</p>
                                    <p>para prescribir, rehabilitar y optimizar el</p>
                                    <p>rendimiento de cada usuario</p>
                                    <p>asegurando resultados efectivos.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="beneficiosAbajo">
                        <Fade delay={800} cascade >

                            <div className="bene bene3">
                                <img src="../../assets/images/experienciaIcon.webp" alt="" />
                                <h3>Experiencia</h3>
                                <div className="beneText">
                                    <p>Más de 20 años ayudando a personas</p>
                                    <p>activas y deportistas de todos los niveles,</p>
                                    <p>garantizando seguridad y resultados.</p>
                                    <p>Tu rendimiento y bienestar, siempre</p>
                                    <p>en buenas manos</p>
                                </div>
                            </div>
                            <div className="bene bene4">
                                <img src="../../assets/images/intragacionIcon.webp" alt="" />
                                <h3>Integración</h3>
                                <div className="beneText">
                                    <p>No importa tu nivel ni objetivo. Nuestro</p>
                                    <p>enfoque interdisciplinario combina diversas</p>
                                    <p>especialidades en ciencias del movimiento,</p>
                                    <p>para acompañarte y ayudarte en tu proceso</p>
                                    <p>hacia el éxito.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <Mvv360 />
        </div >
    )
}

export default Beneficios;