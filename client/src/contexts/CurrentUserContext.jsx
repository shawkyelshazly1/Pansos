import { createContext, useContext, useEffect, useState } from "react";
import { useApolloClient, useQuery } from "@apollo/client";
import { AUTH_USER } from "../graphql/user/query";
import { CurrentAppContext } from "./AppContext";

// create user context
export const currentUserContext = createContext(null);

// craete user provider
export const CurrentUserProvider = ({ children }) => {
	// initial status
	const [currentUser, setCurrentUser] = useState("");
	const [isAuthLoading, setIsAuthLoading] = useState(true);

	// loading apollo client instance
	const client = useApolloClient();

	// query to load user
	const { refetch } = useQuery(AUTH_USER, {
		onError: (error) => {
			logoutUser();
		},
		onCompleted: async ({ authUser }) => {
			setIsAuthLoading(false);
			setCurrentUser(authUser);
		},
	});

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
			refetch();
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
		setIsAuthLoading(false);
		client.clearStore();
	};

	// context exposed stateValues
	const stateValues = {
		currentUser,
		isAuthLoading,
		setCurrentUser,
		logoutUser,

		checkAuth,
	};

	return (
		<currentUserContext.Provider value={stateValues}>
			{children}
		</currentUserContext.Provider>
	);
};
