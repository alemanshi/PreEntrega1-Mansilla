import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const clickCarrito = () => alert ('Hiciste un click en el CARRITO')

const CartWidget = () => {
  return (
    <span className="widget-carrito"> 
      <FontAwesomeIcon icon={faShoppingCart} onClick={clickCarrito} className="icono-carrito" /> 
      <span className="contador-items">1</span>
    </span>
  );
};

export default CartWidget;