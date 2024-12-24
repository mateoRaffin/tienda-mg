function Item({nombre,imagen,precio,descripcion}) {
    return (
        <div className="card">
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre} style={{ width: "15%", height: "auto" }} />
            <p>{descripcion}</p>
            <p>$ {precio}</p>
        </div>
    )
}

export default Item