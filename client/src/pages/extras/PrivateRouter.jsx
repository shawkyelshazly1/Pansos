import React, { useContext } from "react";
import Login from "../auth/Login";
import LoadingSpinner from "../../components/utils/LoadingSpinner";
import { currentUserContext } from "../../contexts/CurrentUserContext";

export default function PrivateRouter({ children }) {
	// load user and loading status from currentUser context
	const { currentUser, authLoading } = useContext(currentUserContext);

	// show loading spinner if loading user
	if (authLoading) return <LoadingSpinner />;

	// check if authenticated or not to render login component
	if (!currentUser) return <Login />;
	else return children; // if authenticated render children
}
