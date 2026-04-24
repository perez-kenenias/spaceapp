import ItemMenu from "./ItemMenu"

const BarraLateral = () => {
  return (
    <aside>
        <nav>
            <ul className="listaMenu">
                <ItemMenu textoMenu="Inicio"></ItemMenu>
                <ItemMenu textoMenu="Más Vistas"></ItemMenu>
                <ItemMenu textoMenu="Nuevas"></ItemMenu>
                <ItemMenu textoMenu="Sorprendeme"></ItemMenu>
            </ul>
        </nav>
    </aside>
  )
}

export default BarraLateral