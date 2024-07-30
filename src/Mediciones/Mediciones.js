import React, { useEffect, useRef } from 'react';
import './Mediciones.css'; // Archivo de estilos para Mediciones

const Mediciones = ({ datos }) => {
    const canvasRef = useRef(null);
    const canvasWidth = 809; // Ajusta el ancho del canvas según sea necesario

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Limpiar el canvas antes de dibujar
        ctx.clearRect(0, 0, width, height);

        // Dibujar las mediciones basadas en los datos
        ctx.beginPath();
        ctx.moveTo(0, height / 2); // Iniciar desde el centro

        for (let i = 0; i < datos.length; i++) {
            const dato = datos[i];
            const x = (i / datos.length) * canvasWidth;
            const y = height / 2 - dato * (height / 2); // Calcular la posición vertical
            ctx.lineTo(x, y); // Dibujar línea hasta el punto
        }

        ctx.strokeStyle = '#28a745'; // Color de las mediciones
        ctx.lineWidth = 2;
        ctx.stroke();

        // Agregar texto con fecha y hora en la parte inferior
        ctx.font = '12px Arial'; // Tamaño y fuente del texto
        ctx.fillStyle = '#000'; // Color del texto
        ctx.textAlign = 'start'; // Alinear el texto a la izquierda

        const fechaHoraInicio = obtenerFechaHoraInicio(); // Función para obtener fecha y hora de inicio
        const fechaHoraFin = obtenerFechaHoraFin(); // Función para obtener fecha y hora de fin

        ctx.fillText(fechaHoraInicio, 10, height - 2); // Texto de fecha y hora de inicio
        ctx.fillText(fechaHoraFin, canvasWidth - 150, height - 1); // Texto de fecha y hora de fin

        // Dibujar línea vertical para ver la amplitud
        ctx.beginPath();
        ctx.moveTo(0, 0); // Desde el borde izquierdo arriba
        ctx.lineTo(0, height); // Hacia abajo
        ctx.strokeStyle = '#FF0000'; // Color de la línea vertical
        ctx.lineWidth = 4;
        ctx.stroke();

        // Dibujar números en la línea vertical
        ctx.font = '10px Arial'; // Tamaño y fuente de los números
        ctx.fillStyle = '#000'; // Color de los números
        ctx.textAlign = 'center'; // Alinear los números al centro horizontalmente

        const amplitudMaxima = calcularAmplitudMaxima(datos); // Función para calcular la amplitud máxima
        ctx.fillText(`+${amplitudMaxima}`, 60, 10); // Número arriba
        ctx.fillText(`-${amplitudMaxima}`, 60, height - 15); // Número abajo

    }, [datos, canvasWidth]); // Ejecutar efecto cuando los datos o el ancho del canvas cambien

    // Función para obtener fecha y hora de inicio (puedes ajustar esta función según tus necesidades)
    const obtenerFechaHoraInicio = () => {
        const now = new Date();
        return now.toLocaleString(); // Formato de fecha y hora según el locale del navegador
    };

    // Función para obtener fecha y hora de fin (puedes ajustar esta función según tus necesidades)
    const obtenerFechaHoraFin = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() + datos.length); // Añadir minutos basados en la longitud de datos
        return now.toLocaleString(); // Formato de fecha y hora según el locale del navegador
    };

    // Función para calcular la amplitud máxima
    const calcularAmplitudMaxima = (datos) => {
        if (datos.length === 0) return 0;
        return Math.max(...datos.map(dato => Math.abs(dato)));
    };

    return (
        <div className="canvas-container-mediciones">
            <canvas ref={canvasRef} width={canvasWidth} height={100} />
        </div>
    );
};

export default Mediciones;
