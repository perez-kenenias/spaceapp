import React from 'react'
import Imagen from './Imagen'

interface ImagenData {
    id: number
    titulo: string
    archivoImagen: string
    favorita: boolean
}

interface ModalProps {
    imagen: ImagenData
    onClose: React.Dispatch<React.SetStateAction<number>>
}

const Modal = ({ imagen, onClose }: ModalProps) => {
    return (
        <dialog className='modal' open>
            <Imagen
                imagen={imagen}
                expandida={true}
                imagenSeleccionada={onClose}
            />
            <form method='dialog'>
                <button className='botonCerrar'
                    onClick={() => onClose(0)}>
                    <img
                        src='img/iconos/cerrar.png'
                        alt='boton de cerrar'
                        width={32}
                        height={32}
                    />
                </button>
            </form>
        </dialog>

    )
}

export default Modal