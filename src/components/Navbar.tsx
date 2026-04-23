import BarraLateral from "./BarraLateral";
import Busqueda from "./Busqueda";

const Navbar = () => {
    return (
        <>
            <div className="header">
                <img src="img/logo.png" alt="Logo de Space App" />
                <Busqueda></Busqueda>
                <BarraLateral></BarraLateral>
            </div>
        </>
    )
}

export default Navbar;