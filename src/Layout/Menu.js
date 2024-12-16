import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const navList = [
  {path: '/about-me', name: 'ABOUT ME'},
  {path: '/portfolio', name: 'PORTFOLIO'},
  {path: '/shop', name: 'SHOP'},
  {path: '/contact', name: 'CONTACT'},
];

const Menu = () => {
  return (
    <Nav>
      <div>
        <ul>
          {navList.map((navItem) => (
            <li key={navItem.path}>
              <NavLink to={navItem.path}>
                {navItem.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <CartWrapper>
        <NavLink to="https://www.instagram.com/jekh.art.shop/" className={'no-underline'}>
          <FaInstagram />
        </NavLink>
        <NavLink to="/cart" className={'no-underline'}>
          <FaShoppingCart />
        </NavLink>
      </CartWrapper>
    </Nav>
  );
};

const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  padding: 0.8rem 0.5rem 0.5rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  width: 65%;
  font-family: 'Work Sans', sans-serif;

  ul {
    display: flex;
    padding: 0;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 1.6rem;

  }

  li {
    margin: 0 10px;
    width: auto;
  }

  /* Apply underline hover effect to links except those with the .no-underline class */
  a {
    text-decoration: none;
    color: white;
    position: relative;
  }

  a.no-underline {
    text-decoration: none;
    color: white;
    padding-right: 1rem;
  }

  a:not(.no-underline)::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #f1f1f1;
    transition: width 0.3s ease;
  }

  a:not(.no-underline):hover::after {
    width: 100%; /* Expands the underline on hover */
  }
`;

export default Menu;