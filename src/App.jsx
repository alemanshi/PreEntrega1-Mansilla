import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Logo from './components/Logo';
import CartWidget from './components/CartWidget';
import './App.css';
import empresaImg from '../public/foto_nauralmente.png';


function App() {
  return (
    <>
      <NavBar />
      <h1 className='titulo'>Bienvenid@s</h1>
      <img className="foto_empresa" src={empresaImg} alt="Foto de empresa" />
      <ItemListContainer greeting />
    </>
  );
}

export default App;