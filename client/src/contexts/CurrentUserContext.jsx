import { createContext, useEffect, useState } from "react";

// create user context
export const currentUserContext = createContext(null);

// craete user provider
export const CurrentUserProvider = ({ children }) => {
	// initial status
	const [currentUser, setCurrentUser] = useState(" ");
	const [isAuthLoading, setIsAuthLoading] = useState(true);

	// useEffect to auth user
	useEffect(() => {
		// call check auth function here
		checkAuth();
	}, []);

	// function to call api to check user auth based on token in localstorage
	const checkAuth = () => {
		//extract token from localstorage
		const token = localStorage.getItem("accessToken");

		// set loading status
		setIsAuthLoading(true);

		// validate token exists
		if (token && token !== "") {
			// #TODO:  call api to auth here and set current user in context
		} else {
			// if user not authenticated or invalid token
			setIsAuthLoading(false);
			setCurrentUser(null);
		}
	};

	// handle user logout
	const logoutUser = () => {
		// remove accessToken from localstorage
		localStorage.setItem("accessToken", "");
		setCurrentUser(null);
	};

	// context exposed stateValues
	const stateValues = {
		currentUser,
		isAuthLoading,
		logoutUser,
	};

	return (
		<currentUserContext.Provider value={stateValues}>
			{children}
		</currentUserContext.Provider>
	);
};
