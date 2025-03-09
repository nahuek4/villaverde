import '../../css/styles.css';

const Muestra = () => {
    return (
        <div className="back">
            <div className="nav">
                <img src="../../assets/icons/logonav.webp" alt="logo" className="logonav" />
                <img src="../../assets/icons/linea.webp" alt="linea" className="lineanav" />
                <img src="../../assets/icons/menu.webp" alt="menu" className="menunav" />
            </div>
            <div className="textos">
                <h1 className="backtext">New website iss</h1><span>coming soon</span>
            </div>
        </div>
    );
}

export default Muestra;
