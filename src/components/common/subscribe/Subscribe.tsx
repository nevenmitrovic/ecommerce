import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import { subscribeSchema } from '@/validations/index'

import Input from '@/components/common/input/Input'
import Button from '@/components/common/buttons/Button'

import './subscribe.style.css'

interface ISubscribeForm {
	email: string
}

const Subscribe = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<ISubscribeForm>({
		resolver: joiResolver(subscribeSchema),
	})

	const mockHandleSubscribe = handleSubmit(async (data) => {
		const loadingToast = toast.loading('Loading...')

		try {
			await new Promise((resolve) => setTimeout(resolve, 300))
			toast.success(`${data.email} subscribed successfully`, { id: loadingToast })
		} catch (error) {
			toast.error(`Something went wrong`, { id: loadingToast })
		}
	})

	return (
		<form className='subscribe-form' onSubmit={mockHandleSubscribe}>
			<Input
				{...register('email')}
				name='email'
				type='text'
				required={true}
				color='white'
				label='We give you a 10% discount for subscription'
				placeholder='Enter your email'
				error={errors.email?.message}
			/>
			<Button classNam='main-button' type='submit' text='Subscribe' />
		</form>
	)
}

export default Subscribe
