import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<MainPage />} path="/" />
			</Routes>
		</Router>
	);
}
export default App;
