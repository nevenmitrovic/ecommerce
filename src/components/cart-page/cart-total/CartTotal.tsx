import { useContext, useState } from 'react'
import { toast } from 'sonner'

import { CartContext } from '@/stores/contexts/CartContext'
import { UserContext } from '@/stores/contexts/UserContext'

import Input from '@/components/common/input/Input'
import Button from '@/components/common/buttons/Button'

import './cart-total.style.css'

const CartTotal = () => {
	const { getTotalPrice, getSubscribeDiscount, clearCart } = useContext(CartContext)
	const { userData } = useContext(UserContext)
	const [promocode, setPromocode] = useState('')

	const handleOrderSubmit = () => {
		const loadingToast = toast.loading('Processing order...')

		setTimeout(() => {
			toast.dismiss(loadingToast)
			clearCart()
			toast.success('Your order has been submitted!')
		}, 1000)
	}

	const handleApplyPromocode = () => {
		if (!promocode.trim()) {
			toast.error('Please enter a promocode')
			return
		}

		const loadingToast = toast.loading('Processing promocode...')
		setTimeout(() => {
			toast.dismiss(loadingToast)
			setPromocode('')
			toast.success('Promocode applied!')
		}, 1000)
	}

	return (
		<div className='cart-total'>
			<div></div>
			<div>
				<div className='cart-sum'>
					<p>
						Summary: <span>{getTotalPrice().toFixed(2)}$</span>
					</p>
					<p>
						Subscribe:
						<span>{userData ? getSubscribeDiscount(userData.email).toFixed(2) : '0.00'}$</span>
					</p>
					<p>
						Delivery: <span>0.00$</span>
					</p>
					<p>
						Promocode: <span>0.00$</span>
					</p>
				</div>
				<div className='total'>
					Total:{' '}
					{userData
						? (getTotalPrice() - getSubscribeDiscount(userData.email)).toFixed(2)
						: getTotalPrice().toFixed(2)}
					$
				</div>
				<div className='input-promocode'>
					<Input
						type='text'
						placeholder='Enter promocode'
						onChange={(e) => setPromocode(e.target.value)}
					/>
					<Button
						text='Apply'
						type='button'
						onClick={handleApplyPromocode}
						classNam='order-button'
					/>
				</div>
				<div className='place-order'>
					<Button
						text='Place Order'
						type='button'
						onClick={handleOrderSubmit}
						classNam='order-button'
					/>
				</div>
			</div>
		</div>
	)
}

export default CartTotal
