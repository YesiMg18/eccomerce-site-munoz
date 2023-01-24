import * as React from 'react';
import { useNavigate} from 'react-router-dom'
import ItemCount from './itemCounts';
import { useState } from "react"

const ItemDetail = ({id, name, stock, category, image, description, price}) => {
    const [cantidad, setCantidad]=useState(1)

    const navigate = useNavigate()
    const handleVolver = () => {
        navigate (-1)
    }

    const handleAgregar = () => {
        console.log({
            id,
            name,
            stock,
            category,
            image,
            description,
            price,
            cantidad
        })
    }


    return (
        <div>
            <h2>{name}</h2>
            <img src={image}/>
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <small>Categoria: {category}</small>

            <ItemCount
                cantidad={cantidad}
                setCantidad={setCantidad}
                max ={stock}
                onAdd={handleAgregar}
            />
            <hr/>

            <button className='btn btn-primary' onClick={handleVolver}>Volver a Catálogo</button>

        </div>
    )

}

export default ItemDetail