import './navbar.style.css';

import { NavLink, useNavigate } from 'react-router';
import { useCallback, useState, useContext } from 'react';

import Catalog from '@/components/common/navbar/catalog-navbar/Catalog';
import { CartContext } from '@/stores/contexts/CartContext';

const Navbar = () => {
	const [showCatalog, setShowCatalog] = useState(false);

	const navigate = useNavigate();
	const { getTotalItems } = useContext(CartContext);

	const toggleShowCatalog = () => setShowCatalog(!showCatalog);
	const navigateAndToggle = useCallback(
		(path: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
			e.preventDefault();
			navigate(path);
			if (showCatalog) toggleShowCatalog();
		},
		[showCatalog],
	);

	return (
		<header>
			<nav>
				<div className='logo'>
					<NavLink to='/' onClick={navigateAndToggle('/')}>
						FABLE
					</NavLink>
				</div>
				<div>
					<ul className='navbar-list'>
						<li onClick={toggleShowCatalog}>CATALOG</li>
						<li className='mobile-hidden'>
							<NavLink to='#' onClick={navigateAndToggle('#')}>
								ABOUT US
							</NavLink>
						</li>
						<li className='mobile-hidden'>
							<NavLink to='#' onClick={navigateAndToggle('#')}>
								CONTACT
							</NavLink>
						</li>
					</ul>
				</div>
				<div>
					<ul className='navbar-list'>
						<li>
							<NavLink to='/cart' onClick={navigateAndToggle('/cart')}>
								CART ({getTotalItems()})
							</NavLink>
						</li>
						<li>
							<NavLink to='#' onClick={navigateAndToggle('#')}>
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
