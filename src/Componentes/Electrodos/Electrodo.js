import React, { useState } from 'react';
import '../../CSS/Electrodo.css';


// Importa la imagen de manera correcta usando la ruta relativa
import electrodoImage from '../../assets/img/electrodo.png';



const Electrodo = () => {
    const [etiqueta1, setEtiqueta1] = useState(false);
    const [etiqueta2, setEtiqueta2] = useState(false);

    const toggleEtiqueta1 = () => {
        setEtiqueta1(!etiqueta1);
    };

    const toggleEtiqueta2 = () => {
        setEtiqueta2(!etiqueta2);
    };

    return (
        <div className="electrodo-container">
            <img src={electrodoImage} alt="Electrodo" className="electrodo-image" />
            <div className="etiquetas-container">
                <div className={`etiqueta ${etiqueta1 ? 'habilitada' : 'deshabilitada'}`} onClick={toggleEtiqueta1}>
                    Conectado
                </div>
                <div className={`etiqueta ${etiqueta2 ? 'habilitada' : 'desconectada'}`} onClick={toggleEtiqueta2}>
                    Bluetooth
                </div>
            </div>
        </div>
    );
};

export default Electrodo;
