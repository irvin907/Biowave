import React, { useState } from 'react';
import Ondas from './Ondas/Ondas';
import Controles from './Ondas/Controles';
import Header from './Header/Header';
import Electrodo from './Electrodos/Electrodo';
import electrodoImage from './assets/img/electrodo.png';
import estomagoImage from './assets/img/estomago.png';
import ExtraButtons from './Buttons/Extrabuttons';
import OptionsBox from './Estado/Estado';
import Barraprogreso from './Barraprogreso/Barraprogreso';
import Cuestionario from './Cuestionario/Cuestionario'; // Importa el componente Cuestionario
import './App.css'; // Asegúrate de importar tus estilos CSS si es necesario

const App = () => {
  const [simulaciones, setSimulaciones] = useState([
    { id: 1, datos: [] },
    { id: 2, datos: [] },
    { id: 3, datos: [] },
    { id: 4, datos: [] },
    { id: 5, datos: [] },
    { id: 6, datos: [] },
  ]);

  const [mediciones, setMediciones] = useState([
    { id: 1, datos: [] },
    { id: 2, datos: [] },
  ]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const [mostrarCuestionario, setMostrarCuestionario] = useState(false);

  const increaseBy10 = (setCount, count) => {
    setCount(count + 10);
  };

  const decreaseBy10 = (setCount, count) => {
    setCount(count - 10);
  };

  const manejarClick = () => {
    setMostrarCuestionario(!mostrarCuestionario);
  };

  return (
    <div className="App">
      <Header />

      <div className="content-container">
        <div className="graficas-container">
          {simulaciones.map(simulacion => (
            <Ondas key={simulacion.id} datos={simulacion.datos} />
          ))}
        </div>

        <div className="electrodos-container">
          {simulaciones.map((simulacion, index) => (
            <Electrodo key={simulacion.id} imageUrl={electrodoImage} />
          ))}
        </div>

        <div className="imagen-estado-botones-container">
          <div className="estado-section">
            <div className="progreso-container">
              <div className="progreso-texto">Progreso</div>
              <Barraprogreso duration={5000} />
              <OptionsBox />
            </div>

            <div className="imagen-container">
              <img src={estomagoImage} alt="Imagen de Estomago" className="imagen-estomago" />
              <div className="extra-buttons-container">
                <ExtraButtons />
              </div>
            </div>
          </div>

          <div className="controles-container">
            <Controles
              simulaciones={simulaciones}
              setSimulaciones={setSimulaciones}
              mediciones={mediciones}
              setMediciones={setMediciones}
            />
          </div>

          <div className="mediciones-container">
            <div className="medicion-item">
              <div className="texto-medicion">Respiración</div>
              <Ondas datos={mediciones[0].datos} />
            </div>
            <div className="medicion-item">
              <div className="texto-medicion">Movimiento</div>
              <Ondas datos={mediciones[1].datos} />
            </div>
          </div>
        </div>
      </div>

      <div className="contadores-container">
        <div className="contador-section">
          <h2>Aumento 1: {count1}</h2>
          <button onClick={() => increaseBy10(setCount1, count1)}>Aumentar en 10</button>
          <button onClick={() => decreaseBy10(setCount1, count1)}>Disminuir en 10</button>
        </div>

        <div className="contador-section">
          <h2>Aumento 2: {count2}</h2>
          <button onClick={() => increaseBy10(setCount2, count2)}>Aumentar en 10</button>
          <button onClick={() => decreaseBy10(setCount2, count2)}>Disminuir en 10</button>
        </div>

        <div className="contador-section">
          <h2>Aumento 3: {count3}</h2>
          <button onClick={() => increaseBy10(setCount3, count3)}>Aumentar en 10</button>
          <button onClick={() => decreaseBy10(setCount3, count3)}>Disminuir en 10</button>
        </div>
      </div>

      {/* Botón para mostrar/ocultar el componente Cuestionario */}
      <div className="cuestionario-button-container">
        <button onClick={manejarClick}>
          {mostrarCuestionario ? 'Cerrar Cuestionario' : 'Cuestionario'}
        </button>
        {mostrarCuestionario && <Cuestionario />}
      </div>
    </div>
  );
};

export default App;
