import { Link, Outlet } from "react-router-dom";
import Cart from "./CartWidget"


function NavBar() {
    return (
        <>
            <nav id="navBar">
                <img id="logo-Nav" src="../src/assets/logo-tp.png" alt="Nuestro Logo" />
                <ul id="cont-list">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"productos"}>Etiquetas</Link>
                    </li>
                    <li>
                        <Link to={"productos"}>Papelería</Link>
                    </li>
                    <li>
                        <Link to={"productos"}>Tarjetas</Link>
                    </li>
                    <li>
                        <Link to={"productos"}>Sublimación</Link>
                    </li>
                </ul>
                <Cart />
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar