import React, { useState, useEffect } from 'react';
import './Barraprogreso.css'; // Asegúrate de tener un archivo CSS para los estilos

const ProgressBar = ({ duration }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (duration <= 0) return; // Maneja casos donde la duración es 0 o negativa

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + (100 / (duration / 100));
            });
        }, 100);

        return () => clearInterval(interval);
    }, [duration]);

    return (
        <div className="progress-bar-container">
            <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
            >
                <span className="progress-text">{Math.round(progress)}%</span>
            </div>
        </div>
    );
};

export default ProgressBar;
