import { useContext } from 'react';
import { type ICartItem, CartContext } from '@/stores/contexts/CartContext';

import './cart-card.style.css';

interface CartCardProps {
	product: ICartItem;
}

const CartCard = ({ product }: CartCardProps) => {
	const { addItemToCart, decreaseItemQuantity, removeItemFromCart } = useContext(CartContext);

	return (
		<div className='cart-card-container'>
			<img src={product.product.images[0]} alt='product image' />
			<div className='cart-card-controller'>
				<div className='cart-card-info'>
					<p className='cart-card-title'>{product.product.name}</p>
					<p className='cart-card-category'>Category: {product.product.category.name}</p>
					<p className='cart-card-brand'>Brand: {product.product.brand.name}</p>
				</div>
				<div className='product-quantity'>
					<div className='product-price'>
						Price:
						<span>
							{product.product.sale_price
								? product.product.sale_price.toFixed(2)
								: product.product.regular_price.toFixed(2)}
							$
						</span>
					</div>
					<div className='quantity-controller'>
						<div className='product-amount'>
							<span onClick={() => addItemToCart(product.product)}>+</span> {product.quantity}
							<span onClick={() => decreaseItemQuantity(product.product.id)}>-</span>
						</div>
						<button onClick={() => removeItemFromCart(product.product.id)}>Delete</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
