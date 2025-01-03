import React,{useContext} from 'react';
import {Header, Titulo} from '../elementos/Header';
import { Helmet } from 'react-helmet';
import BtnRegresar from '../elementos/BtnRegresar';
import { useAuth } from '../contextos/AuthContext';


const ListaDeGastos = () => {

    return (  
        <>
        <Helmet>
          <title>Lista de Gastos</title>
        </Helmet> 

        <Header>
           <BtnRegresar/>
           <Titulo>Lista de Gastos</Titulo> 
        </Header>
        </>
    );
}
 
export default ListaDeGastos;