import './input.style.css'

import { useId, forwardRef } from 'react'

interface InputProps {
	type: 'text' | 'email' | 'password' | 'number'
	placeholder: string
	required?: boolean
	label?: string
	color?: 'white'
	error?: string
	name?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ name, type, required, color, label, placeholder, onChange, error }, ref) => {
		const id = useId()

		return (
			<div className='input-container'>
				{label && <label htmlFor={id}>{label}</label>}
				<input
					ref={ref}
					style={{
						color: color === 'white' ? 'var(--clr-white)' : 'var(--clr-secondary)',
					}}
					type={type}
					id={id}
					name={name}
					placeholder={placeholder}
					required={required}
					onChange={onChange}
				/>
				{error && <p className='error-message'>{error}</p>}
			</div>
		)
	}
)

export default Input
