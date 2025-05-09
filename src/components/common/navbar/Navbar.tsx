import "./navbar.style.css";

import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/">FABLE</NavLink>
        </div>
        <div>
          <ul>
            <li>CATALOG</li>
            <li className="mobile-hidden">ABOUT US</li>
            <li className="mobile-hidden">CONTACT</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="#">CART</NavLink>
            </li>
            <li>
              <NavLink to="#">LOGIN</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
