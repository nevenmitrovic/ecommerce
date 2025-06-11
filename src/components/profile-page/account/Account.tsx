import { GoogleLogin } from '@react-oauth/google';
import { useContext } from 'react';

import { UserContext } from '@/stores/contexts/UserContext';

import Button from '@/components/common/buttons/Button';

import './account.style.css';
import fableImg from '@/assets/images/fable-store.png';

const Account = () => {
	const { userData, handleUserData, handleLogout } = useContext(UserContext);

	return (
		<div className='account-container'>
			{userData ? (
				<div className='profile-container'>
					<h3>Hello, {userData.name}!</h3>
					<div className='bonus-card'>
						<img src={fableImg} alt='fable store image' />
						<div className='bonus-info'>
							<p>
								Bonus card <span>250 points</span>
							</p>
							<p>
								Cashback <span>5%</span>
							</p>
						</div>
					</div>
					<Button text='Logout' classNam='main-button' onClick={handleLogout} type='button' />
				</div>
			) : (
				<div className='sign-in-form'>
					<h3>Sign in account</h3>
					<GoogleLogin
						onSuccess={(res) => handleUserData(res.credential)}
						onError={() => console.error('Login Error')}
						useOneTap={false}
						type='standard'
						theme='outline'
						size='large'
						text='signin_with'
						shape='rectangular'
					/>
				</div>
			)}
		</div>
	);
};

export default Account;
