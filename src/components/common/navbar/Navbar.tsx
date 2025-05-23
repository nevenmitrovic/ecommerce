import "./navbar.style.css";

import { NavLink, useNavigate } from "react-router";
import { useCallback, useState } from "react";

import Catalog from "@/components/common/navbar/catalog-navbar/Catalog";

const Navbar = () => {
  const [showCatalog, setShowCatalog] = useState(false);

  const navigate = useNavigate();

  const toggleShowCatalog = () => setShowCatalog(!showCatalog);
  const navigateAndToggle = useCallback(
    (path: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      navigate(path);
      if (showCatalog) toggleShowCatalog();
    },
    [showCatalog]
  );

  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/" onClick={navigateAndToggle("/")}>
            FABLE
          </NavLink>
        </div>
        <div>
          <ul className="navbar-list">
            <li onClick={toggleShowCatalog}>CATALOG</li>
            <li className="mobile-hidden">
              <NavLink to="#" onClick={navigateAndToggle("#")}>
                ABOUT US
              </NavLink>
            </li>
            <li className="mobile-hidden">
              <NavLink to="#" onClick={navigateAndToggle("#")}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="navbar-list">
            <li>
              <NavLink to="#" onClick={navigateAndToggle("#")}>
                CART
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={navigateAndToggle("#")}>
                LOGIN
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Catalog show={showCatalog} toggleCatalog={navigateAndToggle} />
    </header>
  );
};
export default Navbar;
