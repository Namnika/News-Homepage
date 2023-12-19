import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</Router>
	);
}
export default App;
