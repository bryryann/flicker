import Navbar from "../../components/Navbar";
import MovieGrid from "../../components/MovieGrid";
import Sidebar from "../../components/Sidebar";
import "./style.css";

const Homepage: React.FC = () => {
    return (
        <main className="home-main">
            <Navbar />
            <div className="home-content">
                <Sidebar />
                <div className="trending-grid">
                    <MovieGrid />
                </div>
            </div>
        </main>
    );
}

export default Homepage;
