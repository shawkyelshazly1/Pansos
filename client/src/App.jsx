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
					<RoutesProvider />
				</CurrentUserProvider>
			</ApolloProvider>
		</div>
	);
}

export default App;
