import * as React from 'react';
import Item from '../item'


const ItemList = ({productos}) =>{
    return (
        <div className="container my-5">
            <h2>Nuestros Productos</h2>
            <hr/>
            <section className="row my-4">
                {productos.map((prod) => <Item key={prod.id}{...prod}/>)}

            </section>
        </div>
    )
}

export default ItemList