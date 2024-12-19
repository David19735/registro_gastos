import React,{useState} from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from '../elementos/Header'
import Boton from '../elementos/Boton';
import {Formulario, Input, ContenedorBoton} from '../elementos/ElementosDeFormulario'
import {ReactComponent as SvgLogin} from '../imagenes/registro.svg'
import styled from 'styled-components';
import {auth} from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Alerta from '../elementos/Alerta';


const Svg=styled(SvgLogin)`
    width: 30%;
    max-height: 6.25rem;
    margin-bottom:1.25rem;
`;


const RegistroUsuarios = () => {

    const [correo,setCorreo]=useState('');
    const [password,setPassword]=useState('');
    const [password2,setPassword2]=useState('');
    const [estadoAlerta,setEstadoAlerta]=useState(false);
    const [mensaje,setMensaje]=useState('');
    const [tipo,setTipo]=useState('')

    const navigate=useNavigate();

    const handleChange=(e)=>{

        switch(e.target.name){
            case 'email': setCorreo(e.target.value)
            break;
            case 'password': setPassword(e.target.value);
            break;
            case 'password2': setPassword2(e.target.value);
            break;
            default: break;
        }
        
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        setEstadoAlerta(false);
        setMensaje('');
        setTipo('')

        const expresionCorreo=/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

        if(!expresionCorreo.test(correo)){
            
            setEstadoAlerta(true);
            setTipo('error');
            setMensaje('Correo Incorrecto')

            return
        }
        if(correo===''|| password==='' || password2===''){
            setEstadoAlerta(true);
            setTipo('error');
            setMensaje('Por favor ingresa todos los datos')
            return
        }
        if(password!==password2){
            setEstadoAlerta(true);
            setTipo('error');
            setMensaje('Las contraseñas no coinciden')
            return 
        }        

        try {
            await createUserWithEmailAndPassword(auth,correo,password);
            setEstadoAlerta(true)
            setTipo('exito')
            setMensaje('Usuario Registrado')
            setTimeout(()=>{
                navigate('/')
            },2000)
                
        } catch (error) {
            
            let mensaje="";

            switch(error.code){
                case 'auth/invalid-password': 
                mensaje="La contraseña debe ser de al menos 6 carácteres";
                setEstadoAlerta(true);
                setTipo('error');
                setMensaje(mensaje)
                break;

                case 'auth/email-already-exists':
                    mensaje="El correo proporcionado ya se encuentra registrado";
                    setEstadoAlerta(true);
                setTipo('error');
                setMensaje(mensaje)
                    break;
                
                case 'auth/invalid-email':
                    mensaje="El correo electrónico no es válido";
                    setEstadoAlerta(true);
                    setTipo('error');
                    setMensaje(mensaje)
                    break;
                default: 
                mensaje='Ingresa los datos correctamente';
                setEstadoAlerta(true);
                setTipo('error');
                setMensaje(mensaje)
                break;    
            }
            console.log(mensaje);
            
        }
        
    }

    return ( 
       <>
        <Helmet>
            <title>Crear Cuenta</title>
        </Helmet>
        <Header>
            <ContenedorHeader>
                <Titulo>Crear Cuenta</Titulo>
                <Svg/>
                <div>
                <Boton to="/iniciar-sesion">Iniciar Sesión</Boton>
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
                <Input
                type='password'
                name='password2'
                placeholder='Repetir Contraseña'
                value={password2}
                onChange={handleChange}
                />

                <ContenedorBoton>
                <Boton primario="true" as='button' type="submit">Crear Cuenta</Boton>
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
 
export default RegistroUsuarios;