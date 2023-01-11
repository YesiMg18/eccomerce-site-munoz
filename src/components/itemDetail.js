import * as React from 'react';
import { useNavigate} from 'react-router-dom'

const ItemDetail = ({id, name, stock, category, image, description, price}) => {

    const navigate = useNavigate()
    const handleVolver = () => {
        navigate (-1)
    }

    return (
        <div>
            <h2>{name}</h2>
            <img src={image}/>
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <small>Categoria: {category}</small>
            <button className='btn btn-primary' onClick={handleVolver}>Volver a Catálogo</button>

        </div>
    )

}

export default ItemDetail