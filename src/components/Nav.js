import { useState } from "react";
import '../styles/App.css'

function Nav() {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className='nav'>
          <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
            <li className='nav-item'>
              <a href='#inicio'>Inicio</a>
            </li>
            <li className='nav-item'>
              <a href='#clinica'>Clinica</a>
            </li>
            <li className='nav-item'>
              <a href='#farmacia'>Farmacia</a>
            </li>
            <li className='nav-item'>
              <a href='#duvidas'>Dúvidas</a>
            </li>
          </ul>
          <div className={`burger ${isActive ? 'active' : ''}`} onClick={handleToggle}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </nav>
    );
}

export default Nav;