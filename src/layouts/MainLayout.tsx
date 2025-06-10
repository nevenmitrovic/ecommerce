import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = ({ children }: any) => {
	return (
		<div className='main-layout'>
			<Navbar />
			<main>{children}</main>
			<Footer />
			<ToastContainer />
		</div>
	);
};
export default MainLayout;
