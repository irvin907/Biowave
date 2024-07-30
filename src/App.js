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
import './App.css'; // Asegúrate de importar tus estilos CSS si es necesario
import Cuestionario from './Cuestionario/Cuestionario';


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

  return (
    <div className="App">
      <Header />

      <div className="content-container">
        {/* Contenedor de las gráficas y electrodos */}
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

        {/* Contenedor horizontal de imagen, estado, botones extra, controles y mediciones */}
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
      
    </div>
    
  );
};

export default App;
