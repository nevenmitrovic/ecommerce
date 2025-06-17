import { Link, useNavigate } from 'react-router'

import Button from '@/components/common/buttons/Button'

import './not-found-component.style.css'

const NotFound = () => {
	const navigate = useNavigate()

	const handleGoBack = () => {
		navigate(-1)
	}

	return (
		<div className='not-found-container'>
			<div className='not-found-content'>
				<div className='error-code'>404</div>
				<h1 className='error-title'>Page Not Found</h1>
				<p className='not-found-description'>
					Sorry, the page you are looking for doesn't exist or has been moved.
				</p>
				<div className='error-actions'>
					<Link to='/' className='home-link'>
						<Button text='Go Home' classNam='main-button' type='button' />
					</Link>
					<Button text='Go Back' classNam='main-button' type='button' onClick={handleGoBack} />
				</div>
			</div>
		</div>
	)
}

export default NotFound
