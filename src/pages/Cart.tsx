import { useContext } from 'react';

import { CartContext } from '@/stores/contexts/CartContext';

import MainLayout from '@/layouts/MainLayout';
import CartCardsContainer from '@/components/cart-page/cart-cards-container/CartCardsContainer';

const Cart = () => {
	const { getTotalPrice } = useContext(CartContext);

	return (
		<MainLayout>
			<CartCardsContainer />
		</MainLayout>
	);
};

export default Cart;
