import CartIcon from '../assets/icons/icon_shopping_cart.svg';
import MenuIcon from '../assets/icons/icon_menu.svg';
import Logo from '../assets/logos/logo_yard_sale.svg';
import '../styles/Header.scss';

const Header = () => {
  return (
    <nav className="header">
      <img src={MenuIcon} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={Logo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={CartIcon} alt="shoping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
