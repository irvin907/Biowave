import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faPause, faSave, faCog, faCheck, faForward } from '@fortawesome/free-solid-svg-icons';
import './IconButton.css';

function IconButton({ icon, text, onClick, styleClass, disabled }) {
    const handleClick = () => {
        if (onClick && !disabled) {
            onClick();
        }
    };

    let iconComponent = null;

    // Determina qué icono mostrar según la prop 'icon'
    switch (icon) {
        case 'play':
            iconComponent = <FontAwesomeIcon icon={faPlay} className="icon" />;
            break;
        case 'stop':
            iconComponent = <FontAwesomeIcon icon={faStop} className="icon" />;
            break;
        case 'pause':
            iconComponent = <FontAwesomeIcon icon={faPause} className="icon" />;
            break;
        case 'resume':
            iconComponent = <FontAwesomeIcon icon={faForward} className="icon" />;
            break;
        case 'save':
            iconComponent = <FontAwesomeIcon icon={faSave} className="icon" />;
            break;
        case 'settings':
            iconComponent = <FontAwesomeIcon icon={faCog} className="icon" />;
            break;
        case 'check-in':
            iconComponent = <FontAwesomeIcon icon={faCheck} className="icon" />;
            break;
        // Agrega más casos según los iconos que necesites
        default:
            iconComponent = null;
    }

    return (
        <button className={`icon-button ${styleClass}`} onClick={handleClick} disabled={disabled}>
            {iconComponent}
            <span className="text">{text}</span>
        </button>
    );
}

export default IconButton;
