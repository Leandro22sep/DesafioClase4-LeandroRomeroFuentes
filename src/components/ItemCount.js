import React from 'react'
import { useState } from 'react'

const ItemCount = ({initial,stock}) => {
  const [contador,setContador] = useState(initial);
  const aumentarContador = () => {
    if(contador<stock){
      setContador(contador+1);
    }
  }
  const disminuirContador = () => {
    if(contador>initial){
      setContador(contador-1);
    }
  }
    return (
    <>
        <div>Campera Nike Negra</div>
        <button onClick={disminuirContador} className="inline">-</button>
        <p class="inline">{contador}</p>
        <button onClick={aumentarContador} className="inline">+</button>
        <div>
        <button>Agregar al Carrito</button>
        </div>
        
    </>
  )
}

export default ItemCount