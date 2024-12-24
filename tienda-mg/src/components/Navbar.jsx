import { Link, Outlet } from "react-router-dom";
import Cart from "./CartWidget"
import "./styles.css"

function NavBar() {
    return (
        <>
            <nav id="navBar">
                <img id="logo-Nav" src="../src/assets/logo-tp.png" alt="Nuestro Logo" />
                <ul id="cont-list">
                    <li id="list-Nav">
                        <Link className="link-NavBar" to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className="link-NavBar" to={"/productos"}>Nuestros Productos</Link>
                    </li>
                </ul>
                <Cart />
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar