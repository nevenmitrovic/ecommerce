import './carousel-card.style.css';

import Carousel from '@/components/product-page/carousel/Carousel';
import ProductInfo from '@/components/product-page/product-info/ProductInfo';
import Button from '@/components/common/buttons/Button';

import { CartContext } from '@/stores/contexts/CartContext';

import { type IProduct } from '@/services/productsService';

import { useContext } from 'react';
import { useNavigate } from 'react-router';

interface CarouselCardProps {
	product: IProduct;
}

const CarouselCard = ({ product }: CarouselCardProps) => {
	const { addItemToCart, isInCart } = useContext(CartContext);

	const navigate = useNavigate();

	return (
		<div className='carousel-card'>
			<Carousel images={product.images} />

			<div>
				<div>
					<div className='card-title'>{product.name}</div>
					<div className='card-regular-price'>${product.regular_price.toFixed(2)}</div>
					<div className='card-price'>${product.sale_price.toFixed(2)}</div>
				</div>

				<div className='order-and-desc'>
					<ProductInfo
						description={product.description}
						specs={product.specs}
						features={product.features}
					/>

					<div className='button-container'>
						{isInCart(product) ? (
							<Button
								type='button'
								onClick={() => navigate('/cart')}
								text='Go to cart'
								classNam='main-button'
							/>
						) : (
							<Button
								type='button'
								onClick={() => addItemToCart(product)}
								text='Add to cart'
								classNam='main-button'
								disabled={!product.in_stock}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarouselCard;
