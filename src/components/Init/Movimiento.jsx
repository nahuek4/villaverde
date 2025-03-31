import Services from "./Services"

const Movimiento = () => {
    return (
        <div className="movInitComp">
            <div className="movimiento">
                <div className="textoMov">
                    <h2 className="textMov">Únete al <span>movimiento</span></h2>
                    <p>DAMIÁN VILLAVERDE es fisioterapeuta, entrenador y </p>
                    <p>docente de Buenos Aires, Argentina. Con más de 20 </p>
                    <p>años de trayectoria, su enfoque interdisciplinario integra</p>
                    <p> diversas especialidades para empoderar a personas </p>
                    <p>activas y deportistas de todos los niveles. Su Método </p>
                    <p>Villaverde es personalizado y se basa en tres pilares</p>
                    <p> esenciales: aliviar el dolor, optimizar el movimiento y </p>
                    <p>mejorar el rendimiento.</p>
                </div>
                <div className="botonMov">
                    <a href="../../pages/About.jsx"><button>Conocé Más</button></a>
                </div>
            </div>
            <div className="bannerMov">
                <p><span>ALIVIAR </span> EL DOLOR - <span>OPTIMIZAR</span> EL MOVIMIENTO - <span>MEJORAR</span> EL RENDIMIENTO</p>
            </div>
            <Services />
        </div >
    )
}

export default Movimiento