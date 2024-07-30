// src/Buttons/ExtraButtons.js
import React from 'react';
import IconButton from './IconButton';

const ExtraButtons = () => {
    return (
        <div className="extra-buttons-container">
            <IconButton
                icon="check-in"
                onClick={() => { }}
                styleClass="check-in"
            />
            <IconButton
                icon="settings"
                onClick={() => { }}
                styleClass="settings"
            />
        </div>
    );
};

export default ExtraButtons;
