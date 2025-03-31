import { useState, useEffect } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// Importar módulos necesarios de Swiper

import { getCats } from "../../services/getServices";
import Beneficios from './Beneficios';

export default function Services() {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data for cats
    useEffect(() => {
        const fetchData = async () => {
            const data = await getCats();
            setDatos(data);
            setLoading(false);  // Cambiar a false cuando los datos se cargan
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;  // O un spinner de carga si prefieres
    }

    return (
        <div className="servicesInitComp">
            <div className="servicesInit">
                <div className="textServices">
                    <p>Simplificamos. Personalizamos. Alcanzamos resultados.</p>
                    <h2>Elige tu camino y alcancemos juntos tu máximo rendimiento</h2>
                </div>
                <div className="servicesBanner">
                </div>
                <div className="botonMov">
                    <a href="../../pages/About.jsx"><button>Conocé Más</button></a>
                </div>
            </div>
            <Beneficios />
        </div >
    );
}
