import { createContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { googleLogout } from '@react-oauth/google';

export interface IUser {
	email: string;
	name: string;
}

interface IUserContext {
	userData: IUser | null;
	handleUserData: (credential?: string) => void;
	handleLogout: () => void;
}

export const UserContext = createContext<IUserContext>({
	userData: null,
	handleUserData: () => {},
	handleLogout: () => {},
});

export const UserContextProvider = ({ children }: any) => {
	const [userData, setUserData] = useState<IUser | null>(null);

	const handleUserData = (credential?: string) => {
		if (!credential) {
			console.log('credentials are not provided');
			setUserData(null);
		}

		const decodedData: IUser = jwtDecode(credential as string);
		setUserData({ email: decodedData.email, name: decodedData.name });
	};

	const handleLogout = () => {
		googleLogout();
		setUserData(null);
	};

	return (
		<UserContext.Provider value={{ userData, handleUserData, handleLogout }}>
			{children}
		</UserContext.Provider>
	);
};
