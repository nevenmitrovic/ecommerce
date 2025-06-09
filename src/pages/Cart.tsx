import { useContext } from 'react';

import { CartContext } from '@/stores/contexts/CartContext';

import MainLayout from '@/layouts/MainLayout';

const Cart = () => {
	const { cart } = useContext(CartContext);

	return (
		<MainLayout>
			{cart.map((item) => {
				return <div>{item.product.id}</div>;
			})}
		</MainLayout>
	);
};

export default Cart;
