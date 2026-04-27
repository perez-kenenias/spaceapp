
interface ItemMenuProps {
  textoMenu: string
  seleccionada: boolean
  opcionSeleccionada: React.Dispatch<React.SetStateAction<string>>
}

const ItemMenu = ({ textoMenu, seleccionada, opcionSeleccionada }: ItemMenuProps) => {
  return (
    <li onClick={ () =>  opcionSeleccionada(textoMenu)} className='opcionMenu'
      style={seleccionada ?
        { backgroundColor: 'black' } : undefined}>
      {textoMenu}
    </li>
  )
}

export default ItemMenu