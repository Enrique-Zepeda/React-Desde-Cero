import React, { useState } from 'react'

const Items = ({nombre, visto} => {
    return(
        <li>{nombre}
        {visto ? '✔' : '❌'}
        </li>
    )
})

export const listado = () => {
    //asi se crea el array
    let listadoSecciones = [
        {nombre:'Instalacion', visto:true},
        {nombre:"Instalacion",visto:true},
        {nombre:"useState", visto:true},
        {nombre:"vite y react", visto:true},
        {nombre:"condicionales", visto:false},
        {nombre:"app", visto:false}
    ]
    const [arreglo, setArreglo] = useState([listadoSecciones])
  return (
    <>
    <h1>Listado de temas del curso</h1>
    <ol>
    {arreglo.map(iterador => <Items key={items.nombre} nombre={iterador.nombre} visto={iterador.visto}></Items>)}
    //despues de la flecha es el return que devuelve la funcion 
    </ol>
    </>
    
  )
}
