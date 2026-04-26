
interface ItemMenuProps {
  textoMenu: string
  seleccionada: string
}

const ItemMenu = ({ textoMenu, seleccionada }: ItemMenuProps) => {
  return (
    <li className='opcionMenu' style={ seleccionada ? 
      { backgroundColor: 'black' } : undefined }>
      { textoMenu }
    </li>
  )
}

export default ItemMenu