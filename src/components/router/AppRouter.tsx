import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'

import { SortContextProvider } from '@/stores/contexts/SortContext'

import PageLoading from '@/components/common/page-loading/PageLoading'

const Home = lazy(() => import('@/pages/Home'))
const Catalog = lazy(() => import('@/pages/Catalog'))
const Product = lazy(() => import('@/pages/Product'))
const Cart = lazy(() => import('@/pages/Cart'))
const Profile = lazy(() => import('@/pages/Profile'))
const About = lazy(() => import('@/pages/About'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const AppRouter = () => {
	return (
		<Suspense fallback={<PageLoading />}>
			<Routes>
				<Route index element={<Home />} />
				<Route
					path='/catalog/:unit/:id/products'
					element={
						<SortContextProvider>
							<Catalog />
						</SortContextProvider>
					}
				/>
				<Route path='/product/:id' element={<Product />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/about' element={<About />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</Suspense>
	)
}

export default AppRouter
