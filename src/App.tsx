import { Route, Routes } from 'react-router'

import { SortContextProvider } from '@/stores/contexts/SortContext'
import { CartContextProvider } from '@/stores/contexts/CartContext'
import { UserContextProvider } from './stores/contexts/UserContext'

import Home from '@/pages/Home'
import Catalog from '@/pages/Catalog'
import Product from '@/pages/Product'
import Cart from '@/pages/Cart'
import Profile from '@/pages/Profile'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

function App() {
	return (
		<UserContextProvider>
			<CartContextProvider>
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
					<Route path='*' element={<NotFound />} />
				</Routes>
			</CartContextProvider>
		</UserContextProvider>
	)
}

export default App
