// Header.js
import React from 'react';
import '../Header/Header.css'; // Importamos el archivo de estilos CSS para el header

function Header() {
    return (
    <header className="header">
        <div className="textlogo">
        <span className="textlogo-bio">Bio</span><span className="textlogo-wave">Wave</span>
        </div>
    </header>
    );
}

export default Header;
