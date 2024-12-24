import { Link } from "react-router-dom"

function Item({ nombre, imagen, precio, descripcion, id }) {
    return (
        <div className="cont-Item">
            <Link className="link-Item" to={`/productos/${id}`} >
                <h2 className="title-Item">{nombre}</h2>
                <img className="img-Item" src={imagen} alt={nombre} />
                <p className="p-Item">{descripcion}</p>
                <p className="precio-Item">$ {precio}</p>
                <p className="info-Item">+ info</p>
            </Link>
        </div>
    )
}

export default Item