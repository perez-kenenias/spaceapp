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
            <div>
                <input type='text' ref={refCajaBusqueda} className='cajaBusqueda' onChange={ (e) => setValorABuscar(e.target.value) }/>
                <button className="botonBuscar" onClick={handleBuscar}>Buscar</button>
            </div>
            <p style={ {color: 'white'} } ref={refParrafoValor}></p>
        </>
    )
}

export default Busqueda   