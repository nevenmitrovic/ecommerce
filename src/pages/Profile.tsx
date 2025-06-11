import Header from '@/components/profile-page/header/Header';
import Account from '@/components/profile-page/account/Account';
import MainLayout from '@/layouts/MainLayout';

const Profile = () => {
	return (
		<MainLayout>
			<Header />
			<Account />
		</MainLayout>
	);
};

export default Profile;
