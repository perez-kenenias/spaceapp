import { useRef } from "react"

const Busqueda = () => {

    const refCajaBusqueda = useRef<HTMLInputElement>(null);
    const refParrafoValor = useRef<HTMLParagraphElement>(null);

    const handleBuscar = () => {
        if (!refParrafoValor.current || !refCajaBusqueda.current) return;
        refParrafoValor.current.textContent = refCajaBusqueda.current.value;
    }



    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                    <input type='text' ref={refCajaBusqueda} className='cajaBusqueda' />
                    <button className="botonBuscar" onClick={handleBuscar}>Buscar</button>
                </div>
                <p style={{ color: 'white' }} ref={refParrafoValor}></p>
            </div >
        </>
    )
}

export default Busqueda   