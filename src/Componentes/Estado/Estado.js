import React, { useState } from 'react';
import '../../CSS/Estado.css';


const OptionsBox = () => {
    const [selectedOptions, setSelectedOptions] = useState({
        ayuno: false,
        agua: false,
        comida: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedOptions(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    return (
        <div className="options-box">
            <h2 className="options-title">Estado</h2>
            <div className="checkbox-group">
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="ayuno"
                        checked={selectedOptions.ayuno}
                        onChange={handleCheckboxChange}
                    />
                    Ayuno
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="agua"
                        checked={selectedOptions.agua}
                        onChange={handleCheckboxChange}
                    />
                    Agua
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="comida"
                        checked={selectedOptions.comida}
                        onChange={handleCheckboxChange}
                    />
                    Comida
                </label>
            </div>
        </div>
    );
};

export default OptionsBox;
