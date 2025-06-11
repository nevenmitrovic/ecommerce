import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { googleLogout } from '@react-oauth/google';

const USER_KEY = 'token';

export interface IUser {
	email: string;
	name: string;
}

interface IUserContext {
	userData: IUser | null;
	handleUserData: (credential?: string) => void;
	handleLogout: () => void;
}

const getUserToken = () => {
	return localStorage.getItem(USER_KEY);
};

export const UserContext = createContext<IUserContext>({
	userData: null,
	handleUserData: () => {},
	handleLogout: () => {},
});

export const UserContextProvider = ({ children }: any) => {
	const [userData, setUserData] = useState<IUser | null>(null);

	useEffect(() => {
		const token = getUserToken();
		if (token) {
			try {
				const parsedToken = JSON.parse(token);
				handleUserData(parsedToken);
			} catch (error) {
				console.error('invalid token format');
				localStorage.removeItem(USER_KEY);
			}
		}
	}, []);

	const handleUserData = (credential?: string) => {
		if (!credential) {
			console.log('credentials are not provided');
			setUserData(null);
		}

		const decodedData: IUser = jwtDecode(credential as string);
		setUserData({ email: decodedData.email, name: decodedData.name });
		localStorage.setItem(USER_KEY, JSON.stringify(credential));
	};

	const handleLogout = () => {
		googleLogout();
		setUserData(null);
		localStorage.removeItem(USER_KEY);
	};

	return (
		<UserContext.Provider value={{ userData, handleUserData, handleLogout }}>
			{children}
		</UserContext.Provider>
	);
};
