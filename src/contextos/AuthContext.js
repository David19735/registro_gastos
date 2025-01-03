import React, {useState,useContext, useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';


const AuthContext=React.createContext(); //Estamos creando el contexto para el estado global

//Hook para acceder al contexto
    const useAuth=()=>{
        return useContext(AuthContext);
    }


const AuthProvider = ({children}) => {

    const [usuario,setUsuario]=useState()
    const [cargando,setCargando]=useState(true);

    useEffect(()=>{
        //Comprobamos si existe un usuario
       const cancelarSuscripcion= onAuthStateChanged(auth,(usuario)=>{
            setUsuario(usuario)
            setCargando(false)
        })
        return cancelarSuscripcion;
    },[])

    return (  
        <AuthContext.Provider value={{usuario:usuario}}>
            {!cargando&&children}
        </AuthContext.Provider>
    );
}
 
export {AuthProvider,AuthContext,useAuth}