import React, { useState, useRef } from 'react';
import IconButton from '../Buttons/IconButton';

const Controles = ({ simulaciones, setSimulaciones, mediciones, setMediciones }) => {
    const [ejecutando, setEjecutando] = useState(false);
    const intervalRef = useRef(null);

    const iniciarTodasLasSimulaciones = () => {
        setEjecutando(true);
        intervalRef.current = setInterval(() => {
            setSimulaciones(prevSimulaciones =>
                prevSimulaciones.map(simulacion => ({
                    ...simulacion,
                    datos: [...simulacion.datos, Math.random()]
                }))
            );
            setMediciones(prevMediciones =>
                prevMediciones.map(medicion => ({
                    ...medicion,
                    datos: [...medicion.datos, Math.random()]
                }))
            );
        }, 1000);
    };

    const detenerTodasLasSimulaciones = () => {
        setEjecutando(false);
        clearInterval(intervalRef.current);
    };

    return (
        <div>
            <div>
                <IconButton
                    icon="play"
                    text="Iniciar"
                    onClick={iniciarTodasLasSimulaciones}
                    styleClass={ejecutando ? 'play disabled' : 'play'}
                    disabled={ejecutando}
                />
                <IconButton
                    icon="stop"
                    text="Detener"
                    onClick={detenerTodasLasSimulaciones}
                    styleClass={ejecutando ? 'stop' : 'stop disabled'}
                    disabled={!ejecutando}
                />
                <IconButton
                    icon="pause"
                    text="Pausar"
                    onClick={() => { /* Funcionalidad de Pausar */ }}
                    styleClass="pause"
                />
                <IconButton
                    icon="resume"
                    text="Reanudar"
                    onClick={() => { /* Funcionalidad de Reanudar */ }}
                    styleClass="resume"
                />
                <IconButton
                    icon="save"
                    text="Guardar"
                    onClick={() => { /* Funcionalidad de Guardar */ }}
                    styleClass="save"
                />
            </div>
        </div>
    );
};

export default Controles;
