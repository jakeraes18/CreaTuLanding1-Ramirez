import React from "react";
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <header className="encabezado__">
            <h1 className="tituloTienda">J-Commerce</h1>
            <CartWidget />
        </header>
    );
};

export default NavBar;
