import './navbar.scss';
import LogoImage  from '../assets/logo.png';
import cartIcon from '../assets/shopping-cart 2.svg';

export const Navbar = () => {
    return (
        <header className="header">
            <nav>
                <a  className="logo" href="#"><img src={LogoImage}nvm/></a>
                <ul>
                    <li><a href='#'>Quienes somos</a></li>
                    <li><a href='#'>Nuestros productos</a></li>
                    <li><a href='#'>Contacto</a></li>
                    <li><a href='#'><img src={cartIcon}/></a></li>
                </ul>
            </nav>
        </header>
    )
}

