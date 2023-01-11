import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './navbar.scss';
import LogoImage  from '../assets/logo.png';
import {Link} from 'react-router-dom'




export const Navbar = () => {
    return (
        <header className="header">
            <nav>
                <Link className="logo" to="/"><img src={LogoImage}/></Link>
                <ul>
                    <li><Link to="/productos">Todos los productos</Link></li>
                    <li><Link to="/productos/inalambricos">Audifonos Inalámbricos</Link></li>
                    <li><Link to="/productos/alambricos">Audifonos Alámbricos</Link></li>
                    <li><Link to="/productos/bocinas">Bocinas</Link></li>
                    <li><Link to="/productos/amplificadores">Amplificadores</Link></li>
                    <li><Link to="/productos/tocadiscos">Tocadiscos</Link></li>
                    <li><IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton></li>
                </ul>
            </nav>
        </header>
    )
}
 export default Navbar

