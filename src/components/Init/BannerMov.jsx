import Services from './Services'

const BannerMov = () => {
    return (
        <div>            {/* ✅ Ticker continuo sin cortes */}
            <div className="bannerMov">
                <div className="marquee">
                    <div className="track">
                        <p>
                            <span>ALIVIAR</span> EL DOLOR – <span>OPTIMIZAR</span> EL MOVIMIENTO – <span>MEJORAR</span> EL RENDIMIENTO –
                            <span>ALIVIAR</span> EL DOLOR – <span>OPTIMIZAR</span> EL MOVIMIENTO – <span>MEJORAR</span> EL RENDIMIENTO –
                        </p>
                        <p aria-hidden="true">
                            <span>ALIVIAR</span> EL DOLOR – <span>OPTIMIZAR</span> EL MOVIMIENTO – <span>MEJORAR</span> EL RENDIMIENTO –
                            <span>ALIVIAR</span> EL DOLOR – <span>OPTIMIZAR</span> EL MOVIMIENTO – <span>MEJORAR</span> EL RENDIMIENTO –
                        </p>
                    </div>
                </div>
            </div>
            <Services />
        </div>
    )
}

export default BannerMov;