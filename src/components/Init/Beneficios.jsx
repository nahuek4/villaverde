import Galeria from "./Galeria";

const Beneficios = () => {
    return (
        <div className="beneComp">
            <div className="beneBack">
                <div className="beneTitulos">
                    <p>Descubre porque...</p>
                    <h2>El Método Villaverde es tu mejor opción</h2>
                </div>
                <div className="beneficios">
                    <div className="beneficiosArriba">
                        <div className="bene bene1">
                            <img src="../../assets/images/movimientoicon.webp" alt="" />
                            <h3>Priorizamos el movimiento</h3>
                            <p>Nuestro enfoque terapéutico se basa en la</p>
                            <p>calidad de movimiento para optimizar y</p>
                            <p>recuperar funcionalmente cada estructura</p>
                            <p>en el menor tiempo posible, garantizando</p>
                            <p>resultados eficientes y rápidos.</p>
                        </div>
                        <div className="bene bene2">
                            <img src="../../assets/images/confiablesIcon.webp" alt="" />
                            <h3>Datos confiables</h3>
                            <p>Medimos, no adivinamos. Usamos</p>
                            <p>evaluaciones validadas internacionalmente</p>
                            <p>para prescribir, rehabilitar y optimizar el</p>
                            <p>rendimiento de cada usuario</p>
                            <p>asegurando resultados efectivos.</p>
                        </div>
                    </div>
                    <div className="beneficiosAbajo">
                        <div className="bene bene3">
                            <img src="../../assets/images/experienciaIcon.webp" alt="" />
                            <h3>Experiencia</h3>
                            <p>Más de 20 años ayudando a personas</p>
                            <p>activas y deportistas de todos los niveles,</p>
                            <p>garantizando seguridad y resultados.</p>
                            <p>Tu rendimiento y bienestar, siempre</p>
                            <p>en buenas manos</p>
                        </div>
                        <div className="bene bene4">
                            <img src="../../assets/images/intragacionIcon.webp" alt="" />
                            <h3>Integración</h3>
                            <p>No importa tu nivel ni objetivo. Nuestro</p>
                            <p>enfoque interdisciplinario combina diversas</p>
                            <p>especialidades en ciencias del movimiento,</p>
                            <p>para acompañarte y ayudarte en tu proceso</p>
                            <p>hacia el éxito.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Galeria />
        </div>
    )
}

export default Beneficios;