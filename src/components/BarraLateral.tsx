import ItemMenu from "./ItemMenu"

const BarraLateral = () => {
  return (
    <aside>
        <nav>
            <ul className="listaMenu">
                <ItemMenu></ItemMenu>
                <ItemMenu></ItemMenu>
                <ItemMenu></ItemMenu>
                <ItemMenu></ItemMenu>
                <ItemMenu></ItemMenu>
            </ul>
        </nav>
    </aside>
  )
}

export default BarraLateral