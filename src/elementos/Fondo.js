import React from 'react';
import styled from "styled-components";
import {ReactComponent as Puntos} from './../imagenes/puntos.svg'

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;
 
const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 0.5rem; /* 40px */
    left: 0.5rem; /* 40px */
    width: 11rem;
`;
 
const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 0.5rem; /* 40px */
    right: 0.5rem; /* 40px */
    width: 11rem;
`;

const Fondo = () => {
    return ( 
        <>
            <PuntosArriba/>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fillOpacity="1"
            preserveAspectRadio="none"
            fill="#0099ff"
             d="M0,0L18.5,32C36.9,64,74,128,111,154.7C147.7,181,185,171,222,170.7C258.5,171,295,181,332,165.3C369.2,149,406,107,443,112C480,117,517,171,554,176C590.8,181,628,139,665,144C701.5,149,738,203,775,197.3C812.3,192,849,128,886,138.7C923.1,149,960,235,997,256C1033.8,277,1071,235,1108,218.7C1144.6,203,1182,213,1218,181.3C1255.4,149,1292,75,1329,58.7C1366.2,43,1403,85,1422,106.7L1440,128L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
            </Svg>
            <PuntosAbajo/>
        </>
     );
}
 
export default Fondo;