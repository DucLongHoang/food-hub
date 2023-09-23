// UserContext.js
import React, { ReactElement, createContext, useContext, useState } from "react";

const UserContext = createContext<any | null>(null);

export function useUser() {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
}

export function UserProvider({ children }: { children: ReactElement }) {
	const [userId, setUserId] = useState<number | null>(null);

	const login = (userId: number) => {
		setUserId(userId);
	};

	const logout = () => {
		setUserId(null);
	};

	return (
		<UserContext.Provider value={{ userId, login, logout }}>
			{children}
		</UserContext.Provider>
	);
}
