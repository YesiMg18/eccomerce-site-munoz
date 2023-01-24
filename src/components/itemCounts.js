



const ItemCount = ({cantidad,setCantidad,onAdd,max}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    


    return(
        <div>
           <butto onClick={handleRestar} className='btn btn-outline-primary'>-</butto>
           <span className="mx-3">{cantidad}</span>
           <button onClick={handleSumar} className='btn btn-primary'>+</button>
           <br/>
           <button onClick={onAdd}className="btn btn-success my-3">Agregar al carrito</button>

        </div>
    )
}

export default ItemCount