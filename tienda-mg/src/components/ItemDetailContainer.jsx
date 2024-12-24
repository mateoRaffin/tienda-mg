import { productos } from "../data/productos";
import { useParams } from "react-router-dom"

function ItemDetailContainer() {

    const { id } = useParams();
    console.log(id)

    const item = productos.find(prod => prod.id === parseInt(id))

    if (!item) {
        return <h2>Producto no encontrado</h2>
    }
    return (
        <div className="cont-detail">
            <h2 className="title-detail">Detalles del producto</h2>
            <h2 className="title-Prod">{item.nombre}</h2>
            <img className="img-detail" src={item.imagen} alt="" />
            <p className="p-detail">{item.descripcion}</p>
            <h3 className="precio-detail">$ {item.precio}</h3>
        </div>
    )
}

export default ItemDetailContainer