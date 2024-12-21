import Navbar from "../../components/Navbar";
import TrendingMovies from "../../components/TrendingMovies";
import Sidebar from "../../components/Sidebar";
import "./style.css";

const Homepage: React.FC = () => {
    return (
        <main className="home-main">
            <Navbar />
            <div className="home-content">
                <Sidebar />
                <div className="trending-grid">
                    <TrendingMovies />
                </div>
            </div>
        </main>
    );
}

export default Homepage;
