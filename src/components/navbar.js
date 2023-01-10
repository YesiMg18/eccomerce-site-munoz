import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './navbar.scss';
import LogoImage  from '../assets/logo.png';




export const Navbar = () => {
    return (
        <header className="header">
            <nav>
                <a  className="logo" href="#"><img src={LogoImage}nvm/></a>
                <ul>
                    <li><a href='#'>Quienes somos</a></li>
                    <li><a href='#'>Nuestros productos</a></li>
                    <li><a href='#'>Contacto</a></li>
                    <li><IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton></li>
                </ul>
            </nav>
        </header>
    )
}
 export default Navbar

