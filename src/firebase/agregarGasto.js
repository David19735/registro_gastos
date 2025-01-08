import {db} from './firebaseConfig';
import { collection, addDoc} from 'firebase/firestore';

const agregarGasto = ({categoria,fecha,descripcion,cantidad,uidUsuario}) => {
    
   return addDoc(collection(db,'gastos'),{
        categoria:categoria,
        fecha:fecha,
        descripcion:descripcion,
        cantidad:Number(cantidad),
        uidUsuario:uidUsuario
    })
   
}
 
export default agregarGasto;

