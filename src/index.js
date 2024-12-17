import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import ListaDeGastos from './componentes/ListaDeGastos';
import InicioSesion from './componentes/InicioSesion';
import GastosPorCategoria from './componentes/GastosPorCategoria'
import EditarGasto from './componentes/EditarGasto';
import { Helmet } from 'react-helmet';
import favicon from './imagenes/logo.png'
import Fondo from './elementos/Fondo';

  WebFont.load({
    google: {
      families: ['Work Sans:400,500,700','sans-serif']
    }
  });

const  Index= () => {
  return (  
    <>
    <Helmet>
      <link rel='shortcut icon' href={favicon} type='image/x-icon'></link>
    </Helmet>

     <BrowserRouter>
        <Contenedor>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/editar/:id' element={<EditarGasto/>}/>
            <Route path='/categorias' element={<GastosPorCategoria/>}/>
            <Route path='/iniciar-sesion' element={<InicioSesion/>}/>
            <Route path='/lista' element={<ListaDeGastos/>}/>
            <Route path='/crear-cuenta' element={<RegistroUsuarios/>}/>
          </Routes>
        </Contenedor>
    </BrowserRouter>

    <Fondo/>
    </>
  );
}
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Index/>
);

