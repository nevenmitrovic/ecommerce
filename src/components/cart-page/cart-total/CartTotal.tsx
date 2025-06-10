import { useContext } from 'react';

import { CartContext } from '@/stores/contexts/CartContext';

import Input from '@/components/common/input/Input';
import Button from '@/components/common/buttons/Button';

import './cart-total.style.css';

const CartTotal = () => {
	const { getTotalPrice } = useContext(CartContext);

	return (
		<div className='cart-total'>
			<div></div>
			<div>
				<div className='cart-sum'>
					<p>
						Summary: <span>{getTotalPrice().toFixed(2)}$</span>
					</p>
					<p>
						Delivery: <span>0$</span>
					</p>
					<p>
						Promocode: <span>0$</span>
					</p>
				</div>
				<div className='total'>Total: {getTotalPrice().toFixed(2)}$</div>
				<div className='input-promocode'>
					<Input
						type='text'
						placeholder='Enter promocode'
						onChange={() => console.log('promocode!')}
					/>
					<Button
						text='Apply'
						type='button'
						onClick={() => console.log('Submited!')}
						classNam='order-button'
					/>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
