import Navbar from "../components/Navbar";
import PopularNews from "../components/PopularNews";
import Trending from "../components/trending";
import "../styles/index.css"

export default function Main() {
    return (
        <div>
            This is the main homepage of news.
            <Navbar />
            <PopularNews />
            <Trending />
        </div>
    );
}
