import { useState } from 'react'
import Banner from './Banner'
import Imagen from './Imagen'
import Modal from './Modal'


interface GaleriaProps {
    fraseAplicacion: string
}

const Galeria = ({ fraseAplicacion } : GaleriaProps) => {

    const [imgSeleccionada, setImgSeleccionada] = useState(0);
    const listaImagenes = [
        {
            id: 1,
            archivoImagen: "img/Card_1.png",
            titulo: "Imagen 1"
        },
        {
            id: 2,
            archivoImagen: "img/Card_2.png",
            titulo: "Imagen 2"
        },
        {
            id: 3,
            archivoImagen: "img/Card_3.png",
            titulo: "Imagen 3"
        },
        {
            id: 4,
            archivoImagen: "img/Card_4.png",
            titulo: "Imagen 4"
        },
        {
            id: 5,
            archivoImagen: "img/Card_5.png",
            titulo: "Imagen 5"
        },
        {
            id: 6,
            archivoImagen: "img/Card_6.png",
            titulo: "Imagen 6"
        },
        {
            id: 7,
            archivoImagen: "img/Card_7.png",
            titulo: "Imagen 7"
        },
        {
            id: 8,
            archivoImagen: "img/Card_8.png",
            titulo: "Imagen 8"
        }
    ]

  return (
    <section className='galeria'>
        <Banner titulo={fraseAplicacion}></Banner>
        <h2 className='subtitulo'>Navega por la galería</h2>
        <section className='imagenes'>
            {listaImagenes.map((imagen) => 
                <Imagen 
                    id={imagen.id}
                    key={imagen.id} 
                    archivoImagen={imagen.archivoImagen} 
                    titulo={imagen.titulo}
                    expandida={false} 
                    imagenSeleccionada={setImgSeleccionada}>
                </Imagen>
            )}
        </section>
        {imgSeleccionada > 0 && (
            <Modal
                imagen={listaImagenes.find(img => img.id === imgSeleccionada)!}
                setImgSeleccionada={setImgSeleccionada}/>
        )}    
    </section>
  )
}

export default Galeria