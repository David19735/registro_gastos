import React,{useState} from 'react';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from '../elementos/ElementosDeFormulario'
import Boton from '../elementos/Boton'
import {ReactComponent as IconoPlus} from '../imagenes/plus.svg'
import SelectCategorias from './SelectCategorias';
import DatePicker from './DatePicker';
import agregarGasto from '../firebase/agregarGasto';
import getUnixTime from 'date-fns/getUnixTime'
import fromUnixTime from 'date-fns/fromUnixTime'
import {useAuth} from '../contextos/AuthContext';
import Alerta from '../elementos/Alerta';

const FormularioGasto = () => {
    
    const [fecha,setFecha]=useState(new Date());
    const [inputDescripcion,setInputDescripcion]=useState('');
    const [inputCantidad,setInputCantidad]=useState('');
    const [categoria,setCategoria]=useState('Hogar')
    const {usuario}=useAuth();
    const [estadoAlerta,setEstadoAlerta]=useState(false)
    const [mensaje,setMensaje]=useState('');
    const [tipo,setTipo]=useState('')

    const handleChange=(e)=>{
        if(e.target.name==='descripcion'){
            setInputDescripcion(e.target.value)
        }
        else if(e.target.name==='valor'){
            setInputCantidad(e.target.value.replace(/[^0-9.]/g,''))
        }
    }


    const handleSubmit=async(e)=>{
        e.preventDefault();
        const cantidad=parseFloat(inputCantidad).toFixed(2);

        if(inputDescripcion!==""&&inputCantidad!==""){
            if(cantidad){
              try {
                await agregarGasto({
                    categoria:categoria,
                    descripcion:inputDescripcion,
                    cantidad:cantidad,
                    fecha: getUnixTime(fecha),
                    uidUsuario:usuario.uid
                })
                    setCategoria('hogar')
                    setInputDescripcion('')
                    setInputCantidad('')
                    setFecha(new Date())
                    setEstadoAlerta(true);
                    setTipo('exito')
                    setMensaje('Gasto agregado')
              } catch (error) {
                setEstadoAlerta(true)
                setTipo('error')
                setMensaje('Hubo un error al registrar el gasto')
              }

            }
            else{
                setEstadoAlerta(true);
                setTipo('error')
                setMensaje('La cantidad es incorrecta')
            }
           
        }
        else{
              setEstadoAlerta(true);
               setTipo('error');
               setMensaje('Ingresa todos los datos');
        }

    }

    return (  
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
                <SelectCategorias categoria={categoria} setCategoria={setCategoria}/>
                <DatePicker fecha={fecha} setFecha={setFecha}/>
            </ContenedorFiltros>
            <div>
                <Input type='text' name='descripcion' id='descripcion' placeholder='Descripción del gasto' value={inputDescripcion} onChange={handleChange}/>

                <InputGrande type='text' name='valor' id='valor' placeholder='$0.00' value={inputCantidad} onChange={handleChange}/>

            </div>
            <ContenedorBoton>
                <Boton as="button" primario conIcono type="submit">Agregar Gasto <IconoPlus/></Boton>
            </ContenedorBoton>
            <Alerta tipo={tipo} mensaje={mensaje} estadoAlerta={estadoAlerta} setEstadoAlerta={setEstadoAlerta}/> 
        </Formulario>
    );
}
 
export default FormularioGasto;
