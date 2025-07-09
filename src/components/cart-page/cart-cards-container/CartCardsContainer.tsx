import { useContext, lazy, Suspense } from 'react'

import { CartContext } from '@/stores/contexts/CartContext'

import './cart-cards-container.style.css'

import Spinner from '@/components/common/spinner/Spinner'

const CartCard = lazy(() => import('@/components/cart-page/cart-card/CartCard'))

const CartCardsContainer = () => {
	const { cart } = useContext(CartContext)

	return (
		<div className='cart-cards-container'>
			<Suspense fallback={<Spinner />}>
				{cart.map((item) => (
					<CartCard key={item.product.name} product={item} />
				))}
			</Suspense>
		</div>
	)
}

export default CartCardsContainer
