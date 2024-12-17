import React from 'react';
import styled from 'styled-components';
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from '../elementos/Header';
import { Helmet } from 'react-helmet';
import Boton from '../elementos/Boton';
import BtnRegresar from '../elementos/BtnRegresar';

const GastosPorCategoria = () => {
    return (
       <>
        <Helmet>
          <title>Gastos por Categoría</title>
        </Helmet> 

        <Header>
           <BtnRegresar/>
           <Titulo>Categorías</Titulo> 
        </Header>
       </>
      );
}
 
export default GastosPorCategoria;