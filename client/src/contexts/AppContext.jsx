// app context

import { createContext, useState } from "react";

export const CurrentAppContext = createContext(null);

// App Provider
export const CurrentAppProvider = ({ children }) => {
	// initial state
	const [selectedPost, setSelectedPost] = useState("");

	const stateValues = {
		setSelectedPost,
		selectedPost,
	};

	return (
		<CurrentAppContext.Provider value={stateValues}>
			{children}
		</CurrentAppContext.Provider>
	);
};
