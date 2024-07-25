import { useState } from "react";
import arrow from '../assets/images/arrow-down.svg';
import '../styles/App.css';

function Box({texto1, texto2}) {
    const [estilos, setEstilos] = useState({
        opacity: 0,
        height: 0,
        overflow: 'hidden',
    });

    const handleClick = () => {
        setEstilos((prevEstilos) => ({
            opacity: prevEstilos.opacity === 0 ? 1 : 0,
            height: prevEstilos.height === 0 ? 'auto' : 0,
            overflow: prevEstilos.overflow === 'hidden' ? 'visible' : 'hidden'
        }));
        
      }

    return (
        <div className='pergunta'>
        <div className='box' onClick={handleClick}>
          <h3>{texto1}</h3>
          <img src={arrow}/>
        </div>
        <p className='texto' style={estilos}>{texto2}</p>
      </div>
    )

}

export default Box;