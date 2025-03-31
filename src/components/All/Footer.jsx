const Footer = () => {
    return (
        <div className="footerComp">
            <div className="footerBack">
                <div className="footercontent">
                    <div className="footerText">
                        <p className="footerTextP">MOVETE BIEN,</p>
                        <p className="footerPAdd">VIVÍ SIN DOLOR.</p>
                    </div>

                    <div className="footerButton">
                        <a href=""><button>RESERVAR AHORA</button></a>
                    </div>
                </div>
                <div className="textIcons">
                    <div className="textFooter">
                        <a href=""><p>+54 9 11 57272184</p></a>
                        <a href="mailto:"><p>damianvillaverde@gmail.com
                        </p></a>
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2025</p>
                    </div>
                    <div className="icons">
                        <a href=""><img src="../../assets/images/linkedinIcon.webp" alt="icono LinkedIn" /></a>
                        <a href=""><img src="../../assets/images/instagramIcon.webp" alt="icono Instagram" /></a>
                        <a href=""><img src="../../assets/images/spotifyIcon.webp" alt="icono Spotify" /></a>
                        <a href=""><img src="../../assets/images/youtubeIcon.webp" alt="icono Youtube" /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer