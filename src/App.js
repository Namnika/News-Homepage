import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Main />} path="/" />
			</Routes>
		</Router>
	);
}
export default App;
