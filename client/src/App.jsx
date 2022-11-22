import "./App.css";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import RoutesProvider from "./RoutesProvider";

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { CurrentAppProvider } from "./contexts/AppContext";
import { useEffect } from "react";
import { ChatAppProvier } from "./contexts/ChatContext";

function App() {
	// basic http link
	const httpLink = createHttpLink({
		uri: "http://localhost:5000/graphql",
	});

	// auth link with headers
	const authLink = setContext((_, { headers }) => {
		const token = localStorage.getItem("accessToken");

		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : "",
			},
		};
	});

	// setup apollo client
	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
		connectToDevTools: true,
	});

	return (
		<div className="App">
			<ApolloProvider client={client}>
				<CurrentUserProvider>
					<CurrentAppProvider>
						<ChatAppProvier>
							<RoutesProvider />
						</ChatAppProvier>
					</CurrentAppProvider>
				</CurrentUserProvider>
			</ApolloProvider>
		</div>
	);
}

export default App;
