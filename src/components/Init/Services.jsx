import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'; // Importación correcta de los módulos
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { getCats } from "../../services/getServices";
import Beneficios from './Beneficios';
import { Fade } from 'react-awesome-reveal';

export default function Services() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const data = getCats();
        setDatos(data);
    }, []);

    return (
        <div className="servicesInitComp">
            <div className="servicesInit">
                <Fade direction="up" delay={200}>
                    <div className="textServices">
                        <p>Simplificamos. Personalizamos. Alcanzamos resultados.</p>
                        <h2>Elige tu camino y alcancemos juntos tu máximo rendimiento</h2>
                    </div>
                </Fade>

                <Fade direction="up" delay={-100}>
                    <div className="servicesBanner">
                        <Swiper
                            grabCursor={true}
                            slidesPerView={3}  // Muestra 3 imágenes a la vez
                            pagination={{ clickable: true }}
                            navigation={true}
                            modules={[Pagination, Navigation]}  // Módulos de navegación y paginación
                            className="services-swiper"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {datos.map((cats) => (
                                <SwiperSlide key={cats.id}>
                                    <div className="categoria">
                                        <div className="fondoCategoria">
                                            <div className="imgCategoria">
                                                <img src={`/assets/images/${cats.foto}`} alt={cats.titulo} />
                                                <div className="shadow-overlay"></div>
                                            </div>
                                            <div className="text-overlay">
                                                <h2>{cats.titulo}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="botonMov">
                        <a href="../../pages/About.jsx"><button>Conocé Más</button></a>
                    </div>
                </Fade>
            </div>
            <Beneficios />
        </div>
    );
}
