import "./navbar.style.css";

import { NavLink } from "react-router";
import { useState } from "react";

import Catalog from "@/components/catalog/Catalog";

const Navbar = () => {
  const [showCatalog, setShowCatalog] = useState(false);

  const toggleShowCatalog = () => setShowCatalog(!showCatalog);

  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/">FABLE</NavLink>
        </div>
        <div>
          <ul className="navbar-list">
            <li onClick={toggleShowCatalog}>CATALOG</li>
            <li className="mobile-hidden">ABOUT US</li>
            <li className="mobile-hidden">CONTACT</li>
          </ul>
        </div>
        <div>
          <ul className="navbar-list">
            <li>
              <NavLink to="#">CART</NavLink>
            </li>
            <li>
              <NavLink to="#">LOGIN</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Catalog show={showCatalog} />
    </header>
  );
};
export default Navbar;
