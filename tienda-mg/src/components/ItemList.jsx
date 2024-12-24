import Item from "./Item"
import { useState } from "react";

const categorias = {
    ETIQUETAS: "Etiquetas",
    PAPELERIA: "Papelería",
    TARJETAS: "Tarjetas",
    SUBLIMACION: "Sublimación"
}

function ItemList({items}) {

    const [selectedCategory,setSelectedCategory] = useState("");

    const filteredItems = selectedCategory ? items.filter(item=>item.categoria === selectedCategory) :items;

    return (
        <div>
            <div>
                <button onClick={()=> setSelectedCategory(categorias.ETIQUETAS)}>Etiquetas</button>
                <button onClick={()=> setSelectedCategory(categorias.PAPELERIA)}>Papelería</button>
                <button onClick={()=> setSelectedCategory(categorias.TARJETAS)}>Tarjetas</button>
                <button onClick={()=> setSelectedCategory(categorias.SUBLIMACION)}>Sublimación</button>
            </div>
            {filteredItems.map((item) => (
                <Item
                    key={item.id}
                    nombre={item.nombre}
                    imagen={item.imagen}
                    precio={item.precio}
                    descripcion={item.descripcion}
                />
            )

            )}
        </div>
    )
}

export default ItemList