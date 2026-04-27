import React from 'react'
import Imagen from './Imagen'

const Modal = () => {
    return (
        <dialog className='modal'>
            <Imagen titulo='' archivoImagen={'img/Card_1.png'}></Imagen>
            <form method='dialog'>
                <button className='botonCerrar'>
                    <img src='iconos/cerrar.png' alt='boton de cerrar' />
                </button>
            </form>
        </dialog>

    )
}

export default Modal