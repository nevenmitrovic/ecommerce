import type { IProduct } from '@/services/productsService';
import { createContext, useEffect, useState } from 'react';

const CART_STORAGE_KEY = 'ecommerce-cart';

export interface ICartItem {
	product: IProduct;
	quantity: number;
}

interface ICartContext {
	cart: ICartItem[];
	addItemToCart: (newItem: IProduct) => void;
	decreaseItemQuantity: (id: number) => void;
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
	sessionStorage.removeItem(CART_STORAGE_KEY);
	sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

export const CartContext = createContext<ICartContext>({
	cart: [],
	addItemToCart: () => {},
	decreaseItemQuantity: () => {},
	removeItemFromCart: () => {},
	clearCart: () => {},
	getTotalPrice: () => 0,
	getTotalItems: () => 0,
	isInCart: () => false,
});

export const CartContextProvider = ({ children }: any) => {
	// initialize cart from sessionStorage
	const [cart, setCart] = useState<ICartItem[]>(() => loadCartFromStorage());

	// save new cart in session storage if the cart has changed
	useEffect(() => {
		saveCartToStorage(cart);
	}, [cart]);

	const addItemToCart = (newItem: IProduct) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.product.id === newItem.id);

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

	const decreaseItemQuantity = (id: number) => {
		setCart((prevCart) => {
			return prevCart
				.map((item) => {
					if (item.product.id === id) {
						if (item.quantity <= 1) {
							return item;
						}
						return { ...item, quantity: item.quantity - 1 };
					}
					return item;
				})
				.filter((item) => !(item.product.id === id && item.quantity <= 1));
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
		return cart.some((item) => item.product.id === newItem.id);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addItemToCart,
				decreaseItemQuantity,
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
