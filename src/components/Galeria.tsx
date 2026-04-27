import Banner from './Banner'
import Imagen from './Imagen'
import Modal from './Modal'


interface GaleriaProps {
    fraseAplicacion: string
}

const Galeria = ({ fraseAplicacion } : GaleriaProps) => {
  return (
    <section className='galeria'>
        <Banner titulo={fraseAplicacion}></Banner>
        <h2 className='subtitulo'>Navega por la galería</h2>
        <section className='imagenes'>
            <Imagen archivoImagen='img/Card_1.png' titulo="Imagen 1"></Imagen>
            <Imagen archivoImagen='img/Card_2.png' titulo="Imagen 2"></Imagen>
            <Imagen archivoImagen='img/Card_3.png' titulo="Imagen 3"></Imagen>
            <Imagen archivoImagen='img/Card_4.png' titulo="Imagen 4"></Imagen>
            <Imagen archivoImagen='img/Card_5.png' titulo="Imagen 5"></Imagen>
            <Imagen archivoImagen='img/Card_6.png' titulo="Imagen 6"></Imagen>
        </section>
        <Modal></Modal>
    </section>
  )
}

export default Galeria