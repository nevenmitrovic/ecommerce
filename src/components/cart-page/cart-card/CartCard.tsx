import type { ICartItem } from '@/stores/contexts/CartContext';

import './cart-card.style.css';

interface CartCardProps {
	product: ICartItem;
}

const CartCard = ({ product }: CartCardProps) => {
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
								? product.product.sale_price
								: product.product.regular_price}
							$
						</span>
					</div>
					<div className='quantity-controller'>
						<div className='product-amount'>
							<span>+</span> {product.quantity} <span>-</span>
						</div>
						<button>Delete</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
