import React from 'react'
import Banner from './Banner'
import Imagen from './Imagen'

const Galeria = () => {
  return (
    <section>
        <Banner></Banner>
        <h2 className='subtitulo'>Navega por la galería</h2>
        <section className='imagenes'>
            <Imagen></Imagen>
            <Imagen></Imagen>
            <Imagen></Imagen>
            <Imagen></Imagen>
            <Imagen></Imagen>
            <Imagen></Imagen>
        </section>
        <Imagen></Imagen>
    </section>
  )
}

export default Galeria