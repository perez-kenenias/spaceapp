import { useRef } from "react"

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
  const imageRef = useRef<HTMLImageElement>(null);;

  const handleAcercar = () => {
    if(imageRef.current){
      imageRef.current.style.transform = 'scale(1.5)';
    }
  }

  const handleAlejar = () => {
    if(imageRef.current){
      imageRef.current.style.transform = 'scale(1)';
    }
  }

  return (
    <figure
      className='imagenGaleria'
      style={expandida ? { width: '100%' } : undefined}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          ref={imageRef}
          onClick={() => imagenSeleccionada(imagen.id)}
          src={imagen.archivoImagen}
          alt="imagen"
          style={{ width: '100%', height: 'auto' }} />
      </div>

      <figcaption>
        {
          expandida && <div>
            <button className="botonBuscar" onClick={handleAcercar}>Acercar</button>
            <button className="botonBuscar" onClick={handleAlejar}>Alejar</button>
          </div>
        }
        <div className="tituloImagen">
          <h3>{imagen.titulo}</h3>
          <div onClick={() => {
            actualizaFavoritas(imagen.id)
          }}>
            {imagen.favorita
              ? <img src="img/iconos/favorito-activo.png" />
              : <img src="img/iconos/favorito.png" />}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}

export default Imagen