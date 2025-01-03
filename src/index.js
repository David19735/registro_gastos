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
import { AuthProvider,AuthContext } from './contextos/AuthContext';
import RutaPrivada from './componentes/RutaPrivada';

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

     <AuthProvider>
     <BrowserRouter>
        <Contenedor>
          <Routes>

            <Route path='/iniciar-sesion' element={<InicioSesion/>}/>
            <Route path='/crear-cuenta' element={<RegistroUsuarios/>}/>

            <Route path='/' element={
              <RutaPrivada>
                <App/>
              </RutaPrivada>
            }/>


            <Route
              path='/categorias' element={
                <RutaPrivada>
                  <GastosPorCategoria/>
                </RutaPrivada>
              }
            />

            <Route
            path='/lista' element={
              <RutaPrivada>
                <ListaDeGastos/>
              </RutaPrivada>
            }
            />

            <Route
              path='/editar/:id' element={
                <RutaPrivada>
                  <EditarGasto/>
                </RutaPrivada>
              }
            />
          </Routes>
        </Contenedor>
    </BrowserRouter>
     </AuthProvider>

    <Fondo/>
    </>
  );
}
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Index/>
);

