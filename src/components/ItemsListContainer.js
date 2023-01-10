import * as React from 'react';
import { useEffect, useState } from 'react';
import {pedirDatos} from '../helpers/pedirDatos.js'
import ItemList from './contenedores/itemList.js';
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {categoryId} = useParams

    useEffect(()=>{
     pedirDatos()
        .then((res) =>{
           if(categoryId){
            setProductos(res.filter(prod => prod.category === categoryId))
           }else{
            setProductos(res)
           }
        })
        .catch((err) =>{
            console.log (err)
        })
    }, [categoryId])
   
    
    return (
        <div>
            <ItemList productos={productos}/>
        </div>

    )
}

export default ItemListContainer