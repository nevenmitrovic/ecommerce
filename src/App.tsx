import { CartContextProvider } from '@/stores/contexts/CartContext'
import { UserContextProvider } from './stores/contexts/UserContext'
import AppRouter from '@/components/router/AppRouter'

function App() {
	return (
		<UserContextProvider>
			<CartContextProvider>
				<AppRouter />
			</CartContextProvider>
		</UserContextProvider>
	)
}

export default App
