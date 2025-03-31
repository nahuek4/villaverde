import Mvv360 from './Mvv360';
import { useState, useEffect, useRef } from 'react';

const Galeria = () => {
    const images = [
        "../../assets/images/galeria1.webp",
        "../../assets/images/galeria2.webp",
        "../../assets/images/galeria3.webp",
        "../../assets/images/galeria4.webp",
        "../../assets/images/galeria5.webp",
        "../../assets/images/galeria6.webp",
        "../../assets/images/galeria7.webp",
        "../../assets/images/galeria8.webp",
        "../../assets/images/galeria9.webp",
        "../../assets/images/galeria10.webp",
        "../../assets/images/galeria11.webp",
        "../../assets/images/galeria12.webp",
        "../../assets/images/galeria13.webp",
        "../../assets/images/galeria14.webp",
        "../../assets/images/galeria15.webp",
        "../../assets/images/galeria16.webp"
    ];

    const [visibleItems, setVisibleItems] = useState(new Set());
    const refs = useRef([]);

    useEffect(() => {
        // Función que revisa si una imagen está en el viewport
        const handleScroll = () => {
            refs.current.forEach((ref, index) => {
                if (ref && isInViewport(ref)) {
                    setVisibleItems((prev) => new Set(prev).add(index));
                }
            });
        };

        // Detectar scroll
        window.addEventListener('scroll', handleScroll);

        // Limpiar evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Función que verifica si un elemento está dentro del viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    return (
        <div className="galeriaComp">
            <div className="galeriaBack">
                <div className="gallery-grid">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            ref={(el) => (refs.current[index] = el)}  // Asignar referencia
                            className={`gallery-item ${visibleItems.has(index) ? 'visible' : ''}`}
                        >
                            <img src={src} alt={`Gallery item ${index}`} className="gallery-image" />
                        </div>
                    ))}
                </div>
            </div>
            <Mvv360 />
        </div>
    );
};

export default Galeria;
