import '../estilos/Boton.css'
import { useState } from 'react';
export function Boton(){
    const [contador,setcontador]=useState(0)
    return(
        <>
        <h2>{contador}</h2>
        <button  onClick={()=>{setcontador(contador+1)}}>👌 suma 👌</button>
        <button  onClick={()=>{setcontador(contador-1)}}>👌 resta 👌</button>
        <button onClick={()=>{setcontador(0)}}>zero</button>
    </>

    );
}