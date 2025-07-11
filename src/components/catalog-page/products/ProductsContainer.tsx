import './product.container.style.css'

import { lazy, Suspense } from 'react'

import type { IProduct } from '@/services/productsService'

import Spinner from '@/components/common/spinner/Spinner'

const ProductCard = lazy(() => import('./product-card/ProductCard'))

interface ProductsContainerProps {
	data: IProduct[] | null
}

const ProductsContainer = ({ data }: ProductsContainerProps) => {
	return (
		<div className='products-container'>
			<Suspense fallback={<Spinner />}>
				{data?.map((product) => {
					return (
						<ProductCard
							key={product.id}
							id={product.id}
							img={product.images[0]}
							title={product.name}
							sale_price={product.sale_price}
							regular_price={product.regular_price}
							in_stock={product.in_stock}
						/>
					)
				})}
			</Suspense>
		</div>
	)
}

export default ProductsContainer
