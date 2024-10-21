import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2 className='saludo'>{greeting= 'Te damos la bievenida a nuestra sitio web !!! '}</h2>
      <p className='texto'>{greeting="En Naturalmente, nos dedicamos a ofrecerte lo mejor de la naturaleza, seleccionando cuidadosamente productos que aportan beneficios para tu bienestar y salud. Creemos en una alimentación consciente y en el poder de lo natural para nutrir cuerpo y mente. Además de nuestra oferta de productos naturales, en Naturalmente nos preocupamos por brindarte un acompañamiento integral en tu camino hacia un estilo de vida saludable. Por eso, contamos con servicios especializados de nutrición. Te invitamos a descubrir un lugar donde la naturaleza y la ciencia se unen para ofrecerte lo mejor en alimentación y salud."}</p>
    </>
  );
};

export default ItemListContainer;

