
import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import './Navbar.css';

const NavBar = () => {

// FUNCIONES PARA EL MENU
const clickProductos = () => alert('Hiciste click sobre el botón PRODUCTOS')
const clickNosotros = () => alert('Hiciste click sobre el botón NOSOTROS')
const clickNutricion = () => alert('Hiciste click sobre el botón NUTRICION')
const clickContacto = () => alert('Hiciste click sobre el botón CONTACTO')

return (
// MENU DE NAVEGACIÓN
<>
  <nav className='navbar'>
  <Logo className="logo" />
    <ul className='menu'>
      <li onClick={clickNosotros}><a href="#"></a> Nosotros</li>
      <li onClick={clickProductos}><a href="#"></a> Productos</li>
      <li onClick={clickNutricion}><a href="#"></a> Nutirición</li>
      <li onClick={clickContacto}><a href="#"></a> Contacto</li>
    </ul>
      <CartWidget />
  </nav>
</>
);
};

export default NavBar;
