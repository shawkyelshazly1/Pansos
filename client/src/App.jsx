import "./App.css";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import RoutesProvider from "./RoutesProvider";

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
	ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

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

	// graphql uploadLink
	const uploadLink = createUploadLink({ uri: "http://localhost:5000/graphql" });

	// setup apollo client
	const client = new ApolloClient({
		link: ApolloLink.from([authLink.concat(httpLink), uploadLink]),
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
