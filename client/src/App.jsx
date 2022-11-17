import "./App.css";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import RoutesProvider from "./RoutesProvider";

function App() {
	return (
		<div className="App">
			<CurrentUserProvider>
				<RoutesProvider />
			</CurrentUserProvider>
		</div>
	);
}

export default App;
