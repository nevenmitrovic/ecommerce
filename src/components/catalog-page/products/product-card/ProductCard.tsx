import './product-card.style.css'

import { NavLink } from 'react-router'

export interface ProductCardProps {
	img: string
	title: string
	sale_price: number
	regular_price: number
	id: number
	in_stock: boolean
}

const ProductCard = ({ img, title, sale_price, regular_price, id, in_stock }: ProductCardProps) => {
	return (
		<NavLink to={`/product/${id}`} className={`product-card ${!in_stock ? 'out-of-stock' : ''}`}>
			<img src={img} alt={title} />
			<div className='product-title'>{title}</div>
			<div className='product-regular-price'>${regular_price.toFixed(2)}</div>
			<div className='product-price'>${sale_price.toFixed(2)}</div>
			{!in_stock && <div className='out-of-stock-badge'>Out of Stock</div>}
		</NavLink>
	)
}

export default ProductCard
