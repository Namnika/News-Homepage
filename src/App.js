import Main from "./pages/Main";
import News from "./pages/News";
import PopularNews from "./pages/PopularNews";
import TrendingNews from "./pages/TrendingNews";
import NoMatch from "./pages/NoMatch";
import { Routes, Route } from "react-router-dom";
import "./styles/index.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="#news" element={<News />} />
			<Route path="#popular" element={<PopularNews />} />
			<Route path="#trending" element={<TrendingNews />} />
			<Route path="*" element={<NoMatch />} />
		</Routes>
	);
}
export default App;
