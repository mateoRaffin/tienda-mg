import Cart from "./CartWidget"
function NavBar() {
    return (
        <div id="navBar">
            <img id="logo-Nav" src="../src/assets/logo-tp.png" alt="Nuestro Logo" />
            <ul id="cont-list">
                <li id="item-list"><a id="item-link" href="#">Inicio</a></li>
                <li id="item-list"><a id="item-link" href="#">Productos</a></li>
                <li id="item-list"><a id="item-link" href="#">Nosotros</a></li>
            </ul>
            <Cart/>
        </div>
    )
}

export default NavBar
