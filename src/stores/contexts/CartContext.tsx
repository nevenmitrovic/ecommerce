import type { IProduct } from '@/services/productsService';
import { createContext, useEffect, useState } from 'react';

const CART_STORAGE_KEY = 'ecommerce-cart';

interface ICartItem {
	product: IProduct;
	quantity: number;
}

interface ICartContext {
	cart: ICartItem[];
	addItemToCart: (newItem: IProduct) => void;
	removeItemFromCart: (id: number) => void;
	clearCart: () => void;
	getTotalPrice: () => number;
	getTotalItems: () => number;
	isInCart: (newItem: IProduct) => boolean;
}

const loadCartFromStorage = (): ICartItem[] => {
	const savedCart = sessionStorage.getItem(CART_STORAGE_KEY);
	return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToStorage = (cart: ICartItem[]): void => {
	sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

export const CartContext = createContext<ICartContext>({
	cart: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearCart: () => {},
	getTotalPrice: () => 0,
	getTotalItems: () => 0,
	isInCart: () => false,
});

export const CartContextProvider = ({ children }: any) => {
	// initialize cart from sessionStorage
	const [cart, setCart] = useState<ICartItem[]>(() => loadCartFromStorage());

	// save cart to sessionStorage whenever cart changes
	useEffect(() => {
		saveCartToStorage(cart);
	}, [cart]);

	const addItemToCart = (newItem: IProduct) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find(
				(item) => (item.product.category && item.product.id) === (newItem.category && newItem.id),
			);

			if (existingItem) {
				return prevCart.map((item) => {
					if (item.product.id === newItem.id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}

			return [...prevCart, { product: newItem, quantity: 1 }];
		});
	};

	const removeItemFromCart = (id: number) => {
		setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
	};

	const clearCart = () => {
		setCart([]);
		sessionStorage.removeItem(CART_STORAGE_KEY);
	};

	const getTotalPrice = () => {
		return cart.reduce((acc, curr) => {
			if (curr.product.sale_price) {
				return acc + curr.product.sale_price * curr.quantity;
			} else {
				return acc + curr.product.regular_price * curr.quantity;
			}
		}, 0);
	};

	const getTotalItems = () => cart.length;

	const isInCart = (newItem: IProduct) => {
		return cart.some(
			(item) => (item.product.category && item.product.id) === (newItem.category && newItem.id),
		);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addItemToCart,
				removeItemFromCart,
				clearCart,
				getTotalPrice,
				getTotalItems,
				isInCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
