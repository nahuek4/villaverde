import { useState, useEffect } from 'react';
import { getTests } from "../../services/getServices";


const Galeria = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const data = getTests();
        setDatos(data);
    }, []);

    return (
        <div>
            <div className="testimonios">
                {datos.map((testimonio, index) => (
                    <div className="testimonio" key={index}>
                        <div className="testFoto">
                            <img src={`/assets/images/${testimonio.foto}`} alt="" className="" />
                        </div>
                        <div className="testText">
                            <h2>{testimonio.titulo}</h2>
                            <p>{testimonio.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Galeria;