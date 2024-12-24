import { useEffect,useState } from "react";
import ItemList from "./ItemList";
import { productos } from "../data/productos";

function ItemListContainer() {

    const [items,setItems]=useState([]);

    useEffect(()=>{
        const fethProductos = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productos)
            },1500)
        })

        fethProductos.then((data)=>{
            setItems(data)
        })
    },[])


    return (
        <div className="container">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
