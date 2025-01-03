import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from '../elementos/Header'
import Boton from '../elementos/Boton';
import {Formulario, Input, ContenedorBoton} from '../elementos/ElementosDeFormulario'
import {ReactComponent as SvgLogin} from '../imagenes/login.svg'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase/firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
import Alerta from '../elementos/Alerta';
 

const Svg=styled(SvgLogin)`
    width: 30%;
    max-height: 6.25rem;
    margin-bottom:1.25rem;
`;

const InicioSesion = () => {

    const navigate=useNavigate();
    const [correo,setCorreo]=useState('');
    const [password,setPassword]=useState('');
    const [estadoAlerta,setEstadoAlerta]=useState(false);
    const [mensaje,setMensaje]=useState('');
    const [tipo,setTipo]=useState('')

    const handleChange=(e)=>{
        if(e.target.name==='email'){
            setCorreo(e.target.value)
        }
        else if(e.target.name==='password'){
            setPassword(e.target.value)
        }  
    }

    const handleSubmit=async(e)=>{

        e.preventDefault();

        setEstadoAlerta(false);
        setMensaje('');
        setTipo('');

        const expresionCorreo=/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

        if(!expresionCorreo.test(correo)){
            setEstadoAlerta(true);
            setTipo('error');
            setMensaje('Correo incorrecto')
            return
        }

        if(correo===''|| password===''){
            setEstadoAlerta(true);
            setTipo('error');
            setMensaje('Por favor ingresa los datos')
            return
        }
        
        try {

            await signInWithEmailAndPassword(auth,correo,password);
            setEstadoAlerta(true);
            setTipo('exito');
            setMensaje('Iniciando Sesión')
            setTimeout(()=>{
                navigate('/')
            },500)


        } catch (e) {  

            setEstadoAlerta(true);
            setTipo('error');
            setMensaje('Datos incorrectos');
            
        }

    }

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

        <Formulario onSubmit={handleSubmit}>
                <Input
                type='email'
                name='email'
                placeholder='Correo Electrónico'
                value={correo}
                onChange={handleChange}
                />
                <Input
                type='password'
                name='password'
                placeholder='Contraseña'
                value={password}
                onChange={handleChange}
                />
                <ContenedorBoton>
                <Boton primario="true" as='button' type="submit">Iniciar Sesión</Boton>
                </ContenedorBoton>
        </Formulario>
        <Alerta
            tipo={tipo}
            mensaje={mensaje}
            estadoAlerta={estadoAlerta}
            setEstadoAlerta={setEstadoAlerta}
            
        />
       </>
     );
}
 
export default InicioSesion;