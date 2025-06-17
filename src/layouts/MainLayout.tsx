import Navbar from '@/components/common/navbar/Navbar'
import Footer from '@/components/common/footer/Footer'
import { Toaster } from 'sonner'

const MainLayout = ({ children }: any) => {
	return (
		<div className='main-layout'>
			<Navbar />
			<main>{children}</main>
			<Footer />
			<Toaster richColors={true} position='bottom-right' closeButton={true} />
		</div>
	)
}
export default MainLayout
