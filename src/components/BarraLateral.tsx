import { useState } from "react";
import ItemMenu from "./ItemMenu"

const BarraLateral = () => {

    const [opcionSelecionada, setOpcionSeleccionada] = useState("",);

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
                        opcionesMenu.map((opcion, posicion) => {
                            const seleccionada = opcion === opcionSelecionada;
                            return <ItemMenu
                                key={posicion}
                                textoMenu={opcion}
                                seleccionada={seleccionada}
                                opcionSeleccionada={setOpcionSeleccionada} />
                        })}
                </ul>
            </nav>
        </aside>
    )
}

export default BarraLateral