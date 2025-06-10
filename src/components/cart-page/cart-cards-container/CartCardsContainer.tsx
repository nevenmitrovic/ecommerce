import { useContext } from 'react';

import CartCard from '@/components/cart-page/cart-card/CartCard';

import { CartContext } from '@/stores/contexts/CartContext';

import './cart-cards-container.style.css';

const CartCardsContainer = () => {
	const { cart } = useContext(CartContext);

	return (
		<div className='cart-cards-container'>
			{cart.map((item) => (
				<CartCard key={item.product.name} product={item} />
			))}
		</div>
	);
};

export default CartCardsContainer;
