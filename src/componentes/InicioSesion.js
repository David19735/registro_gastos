import React from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from '../elementos/Header'
import Boton from '../elementos/Boton';
import {Formulario, Input, ContenedorBoton} from '../elementos/ElementosDeFormulario'
import {ReactComponent as SvgLogin} from '../imagenes/login.svg'
import styled from 'styled-components';

const Svg=styled(SvgLogin)`
    width: 30%;
    max-height: 6.25rem;
    margin-bottom:1.25rem;
`;

const InicioSesion = () => {
    return ( 
        <>
        <Helmet>
            <title>Iniciar Sesión</title>
        </Helmet>
        <Header>
            <ContenedorHeader>
                <Titulo>Iniciar Sesión</Titulo>
                <Svg/>
                <div>
                <Boton to="/crear-cuenta">Registrate</Boton>
                </div>
            </ContenedorHeader>
        </Header>

        <Formulario>
                <Input
                type='email'
                name='email'
                placeholder='Correo Electrónico'
                />
                <Input
                type='password'
                name='password'
                placeholder='Contraseña'
                />
                <ContenedorBoton>
                <Boton primario="true" as='button' type="submit">Iniciar Sesión</Boton>
                </ContenedorBoton>
        </Formulario>
       </>
     );
}
 
export default InicioSesion;