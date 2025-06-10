import { useContext } from 'react';

import MainLayout from '@/layouts/MainLayout';
import CartCardsContainer from '@/components/cart-page/cart-cards-container/CartCardsContainer';
import CartTotal from '@/components/cart-page/cart-total/CartTotal';

import { CartContext } from '@/stores/contexts/CartContext';

const Cart = () => {
	const { getTotalItems } = useContext(CartContext);

	if (getTotalItems() === 0) {
		return (
			<MainLayout>
				<div className='empty-cart'>
					<p>Your cart is empty. Start shopping to add items!</p>
				</div>
			</MainLayout>
		);
	}

	return (
		<MainLayout>
			<CartCardsContainer />
			<CartTotal />
		</MainLayout>
	);
};

export default Cart;
