
interface ImagenData {
  id: number
  titulo: string
  archivoImagen: string
  favorita: boolean
}

interface ImagenProps {
  imagen: ImagenData
  expandida: boolean
  imagenSeleccionada: React.Dispatch<React.SetStateAction<number>>
  actualizaFavoritas: (id: number) => void
}

const Imagen = ({ imagen, expandida = false, imagenSeleccionada, actualizaFavoritas }: ImagenProps) => {
  return (
    <figure
      className='imagenGaleria'
      style={expandida ? { width: '100%' } : undefined}>
      <img 
        onClick={() => imagenSeleccionada(imagen.id)} 
        src={imagen.archivoImagen} alt="imagen" />

      <figcaption className="tituloImagen">
        <h3>{imagen.titulo}</h3>
        <div onClick={() => {
          actualizaFavoritas(imagen.id)
        }}></div>
        {imagen.favorita
          ? <img src="img/iconos/favorito-activo.png" />
          : <img src="img/iconos/favorito.png" />}
      </figcaption>
    </figure>
  )
}

export default Imagen