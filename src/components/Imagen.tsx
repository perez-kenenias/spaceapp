
interface ImagenProps {
  id: number
  titulo: string
  archivoImagen: string
  expandida: boolean
  imagenSeleccionada: React.Dispatch<React.SetStateAction<number>>
}

const Imagen = ({id, titulo, archivoImagen, expandida = false, imagenSeleccionada} : ImagenProps) => {
  return (
    <figure onClick={() => imagenSeleccionada(id)} 
            className='imagenGaleria' 
            style={ expandida ? { width:'100%' } : undefined }>
        <img src={archivoImagen} alt="imagen" />
        <figcaption>
            <h3>{titulo}</h3>
        </figcaption>
    </figure>
  )
}

export default Imagen