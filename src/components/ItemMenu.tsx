
interface ItemMenuProps {
  textoMenu: string
}

const ItemMenu = ({ textoMenu }: ItemMenuProps) => {
  return (
    <li className='opcionMenu'>
        {textoMenu}
    </li>
  )
}

export default ItemMenu