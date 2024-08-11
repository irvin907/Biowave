// App.js
import React, { useState } from 'react';
import '../../CSS/Cuestionario.css';


function Cuestionario() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    edad: '',
    sexo: '',
    actividadPrincipal: '',
    fumador: '',
    horariosFijos: '',
    alcohol: '',
    ejercicio: '',
    peso: '',
    estatura: '',
    diabetes: '',
    hipertension: '',
    estomago: '',
    pirocis: '',
    agruras: '',
    diarreas: '',
    estrenimiento: '',
    distensionAbdominal: '',
    flatulencias: '',
    eructos: '',
    nochesDolor: '',
    cirugia: '',
    sangreVomito: '',
    medicamento: '',
    cualMedicamento: '',
    desdeCuando: '',
    frecuenciaDolor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <h1>Cuestionario</h1>
      <form>
      <div className="form-row">
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Apellido paterno:</label>
            <input type="text" name="apellidoPaterno" value={formData.apellidoPaterno} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Apellido materno:</label>
            <input type="text" name="apellidoMaterno" value={formData.apellidoMaterno} onChange={handleChange} />
          </div>
        </div>
        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label>1. Edad:</label>
              <input type="number" name="edad" value={formData.edad} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>2. Sexo:</label>
              <div className="radio-group">
                <label>Masculino</label>
                <input type="radio" name="sexo" value="M" checked={formData.sexo === 'M'} onChange={handleChange} />
                <label>Femenino</label>
                <input type="radio" name="sexo" value="F" checked={formData.sexo === 'F'} onChange={handleChange} />
              </div>
            </div>
          </div>
        </div>

        <div className="form-section">
  <div className="form-row">
    <div className="form-group">
      <label>3. Su actividad principal es:</label>
      <input type="text" name="actividadPrincipal" value={formData.actividadPrincipal} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label>4. ¿Es fumador?</label>
      <div className="radio-group">
        <label>SÍ</label>
        <input type="radio" name="fumador" value="SÍ" checked={formData.fumador === 'SÍ'} onChange={handleChange} />
        <label>NO</label>
        <input type="radio" name="fumador" value="NO" checked={formData.fumador === 'NO'} onChange={handleChange} />
      </div>
    </div>
  </div>
</div>
<div className="form-section">
  <div className="form-row">
    <div className="form-group">
      <label>5. ¿Tiene horarios fijos de alimentos?</label>
      <div className="radio-group">
        <label>SÍ</label>
        <input type="radio" name="horariosFijos" value="SÍ" checked={formData.horariosFijos === 'SÍ'} onChange={handleChange} />
        <label>NO</label>
        <input type="radio" name="horariosFijos" value="NO" checked={formData.horariosFijos === 'NO'} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>6. ¿Consume más de una copa de alcohol por día?</label>
      <div className="radio-group">
        <label>SÍ</label>
        <input type="radio" name="alcohol" value="SÍ" checked={formData.alcohol === 'SÍ'} onChange={handleChange} />
        <label>NO</label>
        <input type="radio" name="alcohol" value="NO" checked={formData.alcohol === 'NO'} onChange={handleChange} />
      </div>
    </div>
  </div>
</div>
        <div className="form-group">
          <label>7. ¿Realiza ejercicio cotidianamente?</label>
          <div className="radio-group">
            <label>SÍ</label>
            <input type="radio" name="ejercicio" value="SÍ" checked={formData.ejercicio === 'SÍ'} onChange={handleChange} />
            <label>NO</label>
            <input type="radio" name="ejercicio" value="NO" checked={formData.ejercicio === 'NO'} onChange={handleChange} />
          </div>
        </div>


        <div className="form-section">
  <div className="form-row">
    <div className="form-group">
      <label>8. Peso:</label>
      <input type="number" name="peso" value={formData.peso} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label>9. Estatura:</label>
      <input type="number" name="estatura" value={formData.estatura} onChange={handleChange} />
    </div>
  </div>
</div>



<div className="form-section">
  <div className="form-row">
    <div className="form-group">
      <label>10. ¿Padece Diabetes (concentración de azúcar en la sangre alta)?</label>
      <div className="radio-group">
        <label>SÍ</label>
        <input type="radio" name="diabetes" value="SÍ" checked={formData.diabetes === 'SÍ'} onChange={handleChange} />
        <label>NO</label>
        <input type="radio" name="diabetes" value="NO" checked={formData.diabetes === 'NO'} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>11. ¿Padece hipertensión (presión alta)?</label>
      <div className="radio-group">
        <label>SÍ</label>
        <input type="radio" name="hipertension" value="SÍ" checked={formData.hipertension === 'SÍ'} onChange={handleChange} />
        <label>NO</label>
        <input type="radio" name="hipertension" value="NO" checked={formData.hipertension === 'NO'} onChange={handleChange} />
      </div>
    </div>
  </div>
</div>

<div className="form-section">
  <div className="form-row">
    <div className="form-group">
      <label>12. ¿Sufre dolor, ardor o vacío en la boca del estómago?</label>
      <div className="radio-group">
        <label>SÍ</label>
        <input type="radio" name="estomago" value="SÍ" checked={formData.estomago === 'SÍ'} onChange={handleChange} />
        <label>NO</label>
        <input type="radio" name="estomago" value="NO" checked={formData.estomago === 'NO'} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>13. ¿Con qué frecuencia?</label>
      <input type="text" name="frecuenciaDolor" value={formData.frecuenciaDolor} onChange={handleChange} />
    </div>
  </div>
</div>

<div className="form-section">
  <div className="form-row">
    <div className="form-group">
      <label>14. ¿Padece Pirosis (quemadura en el pecho después de comer o en ayuno prolongado)?</label>
      <div className="radio-group">
        <label>SÍ</label>
        <input type="radio" name="pirocis" value="SÍ" checked={formData.pirocis === 'SÍ'} onChange={handleChange} />
        <label>NO</label>
        <input type="radio" name="pirocis" value="NO" checked={formData.pirocis === 'NO'} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>15. ¿Padece agruras (ácido en la garganta)?</label>
      <div className="radio-group">
        <label>SÍ</label>
        <input type="radio" name="agruras" value="SÍ" checked={formData.agruras === 'SÍ'} onChange={handleChange} />
        <label>NO</label>
        <input type="radio" name="agruras" value="NO" checked={formData.agruras === 'NO'} onChange={handleChange} />
      </div>
    </div>
  </div>
</div>

<div className="form-section">
  <div className="form-row">
    <div className="form-group">
          <label>16. ¿Padece diarreas frecuentes?</label>
          <div className="radio-group">
            <label>SÍ</label>
            <input type="radio" name="diarreas" value="SÍ" checked={formData.diarreas === 'SÍ'} onChange={handleChange} />
            <label>NO</label>
            <input type="radio" name="diarreas" value="NO" checked={formData.diarreas === 'NO'} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label>17. ¿Padece de estrenimiento?</label>
          <div className="radio-group">
            <label>SÍ</label>
            <input type="radio" name="estrenimiento" value="SÍ" checked={formData.estrenimiento === 'SÍ'} onChange={handleChange} />
            <label>NO</label>
            <input type="radio" name="estrenimiento" value="NO" checked={formData.estrenimiento === 'NO'} onChange={handleChange} />
          </div>
        </div>
        </div>
        </div>

        <div className="form-section">
        <div className="form-row">
        <div className="form-group">
          <label>18. ¿Padece distensión abdominal?</label>
          <div className="radio-group">
            <label>SÍ</label>
            <input type="radio" name="distensionAbdominal" value="SÍ" checked={formData.distensionAbdominal === 'SÍ'} onChange={handleChange} />
            <label>NO</label>
            <input type="radio" name="distensionAbdominal" value="NO" checked={formData.distensionAbdominal === 'NO'} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label>19. ¿Padece flatulencias?</label>
          <div className="radio-group">
            <label>SÍ</label>
            <input type="radio" name="flatulencias" value="SÍ" checked={formData.flatulencias === 'SÍ'} onChange={handleChange} />
            <label>NO</label>
            <input type="radio" name="flatulencias" value="NO" checked={formData.flatulencias === 'NO'} onChange={handleChange} />
          </div>
        </div>
        </div>
        </div>

        <div className="form-section">
  <div className="form-row">
    <div className="form-group">
          <label>20. ¿Padece eructos frecuentes?</label>
          <div className="radio-group">
            <label>SÍ</label>
            <input type="radio" name="eructos" value="SÍ" checked={formData.eructos === 'SÍ'} onChange={handleChange} />
            <label>NO</label>
            <input type="radio" name="eructos" value="NO" checked={formData.eructos === 'NO'} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label>21. ¿Sufre dolor nocturno?</label>
          <div className="radio-group">
            <label>SÍ</label>
            <input type="radio" name="nochesDolor" value="SÍ" checked={formData.nochesDolor === 'SÍ'} onChange={handleChange} />
            <label>NO</label>
            <input type="radio" name="nochesDolor" value="NO" checked={formData.nochesDolor === 'NO'} onChange={handleChange} />
          </div>
        </div>
        </div>
        </div>

        
        <div className="form-section">
  <div className="form-row">
    <div className="form-group">
          <label>22. ¿Ha tenido alguna cirugía en el aparato digestivo?</label>
          <div className="radio-group">
            <label>SÍ</label>
            <input type="radio" name="cirugia" value="SÍ" checked={formData.cirugia === 'SÍ'} onChange={handleChange} />
            <label>NO</label>
            <input type="radio" name="cirugia" value="NO" checked={formData.cirugia === 'NO'} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label>23. ¿Ha tenido vómitos con sangre?</label>
          <div className="radio-group">
            <label>SÍ</label>
            <input type="radio" name="sangreVomito" value="SÍ" checked={formData.sangreVomito === 'SÍ'} onChange={handleChange} />
            <label>NO</label>
            <input type="radio" name="sangreVomito" value="NO" checked={formData.sangreVomito === 'NO'} onChange={handleChange} />
          </div>
        </div>
        </div>
        </div>

        <div className="form-group">
          <label>24. ¿Toma algun medicamiento?</label>
          <div className="radio-group">
            <label>SÍ</label>
            <input type="radio" name="medicamento" value="SÍ" checked={formData.medicamento === 'SÍ'} onChange={handleChange} />
            <label>NO</label>
            <input type="radio" name="medicamento" value="NO" checked={formData.medicamento === 'NO'} onChange={handleChange} />
          </div>
        </div>
        <div className="form-section">
  <div className="form-row">
    <div className="form-group">
          <label>25. ¿Cuál medicamento?</label>
          <input type="text" name="cualMedicamento" value={formData.cualMedicamento} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>26. ¿Desde cuándo?</label>
          <input type="text" name="desdeCuando" value={formData.desdeCuando} onChange={handleChange} />
        </div>
        </div>
        </div>

      </form>
    </div>
  );
}

export default Cuestionario;