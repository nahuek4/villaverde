import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className='navbar'>
            <div className="navContainer">
                <div className="logonav">
                    <img src="../../assets/images/logonav.webp" alt="Logo villaverde" />
                </div>
                <div className="vertical-line"></div>

                <div className="navToggle" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faXmark : faBars} />
                </div>
            </div>

            <div className={`navMenu ${click ? 'active' : ''}`}>
                <ul className="navLinks">
                    <li className='navItem'><NavLink className="navLink" to="/" onClick={handleClick}>Inicio</NavLink></li>
                    <li className='navItem'><NavLink className="navLink" to="/servicios" onClick={handleClick}>Servicios</NavLink></li>
                    <li className='navItem'><NavLink className="navLink" to="/portfolio" onClick={handleClick}>Proyectos</NavLink></li>
                    <li className='navItem'><NavLink className="navLink" to="/contacto" onClick={handleClick}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
