import { Fade } from "react-awesome-reveal"
import Movimiento from "./Movimiento"

const Header = () => {
    return (
        <div className="headerInitComp">
            <div className="Header">
                <Fade delay={2000}
                    duration={2500} triggerOnce>
                    <div className="logo"><img src="../../assets/images/logo.png" alt="" /></div>
                </Fade>
            </div>
            <Movimiento />
        </div>
    )
}

export default Header