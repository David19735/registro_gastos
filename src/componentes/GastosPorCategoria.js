import React from 'react';
import {Header, Titulo} from '../elementos/Header';
import { Helmet } from 'react-helmet';
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