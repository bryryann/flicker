import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import "./style.css";

const Homepage: React.FC = () => {
    return (
        <main className="home-main">
            <Navbar />
            <div className="home-content">
                <Sidebar />
                <div className="outlet-content">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

export default Homepage;
