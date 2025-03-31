import Movimiento from "./Movimiento"

const Header = () => {
    return (
        <div className="headerInitComp">
            <div className="Header">
                <div className="logo"><img src="../../assets/images/logo.png" alt="" /></div>
            </div>
            <Movimiento />
        </div>
    )
}

export default Header