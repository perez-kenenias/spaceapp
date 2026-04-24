
import BarraLateral from './BarraLateral'
import Galeria from './Galeria'

interface Props {
    fraseAplicacion: string
}

const ContenedorPrincipal = ({ fraseAplicacion }: Props) => {
    return (
        <div className='mainContainer'>
            <BarraLateral></BarraLateral>
            <Galeria fraseAplicacion={fraseAplicacion}></Galeria>
        </div>
    )
}

export default ContenedorPrincipal