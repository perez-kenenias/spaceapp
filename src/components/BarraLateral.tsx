import ItemMenu from "./ItemMenu"

const BarraLateral = () => {

    const opcionesMenu = [
        "Inicio",
        "Más Vistas",
        "Nuevas",
        "Sorprendeme", 
        "Quienes somos"
    ];

    return (
        <aside>
            <nav>
                <ul className="listaMenu">
                    {
                        opcionesMenu.map((opcion, posicion) => (<ItemMenu key={posicion} textoMenu={opcion} />))
                    }
                </ul>
            </nav>
        </aside>
    )
}

export default BarraLateral