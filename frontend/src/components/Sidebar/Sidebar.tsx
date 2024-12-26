import { Link } from "react-router-dom";
import "./style.css"

const Sidebar: React.FC = () => {
    return (
        <div className="main-sidebar">
            <ul className="sidebar-anchors">
                <Link to="favorites">Favorites (W.I.P)</Link>
                <br />
                <Link to="watchlist">Watchlist (W.I.P)</Link>
                <br />
            </ul>
            <div className="sidebar-profile">
                <a href="#">My Profile (W.I.P)</a>
            </div>
        </div>
    )
}

export default Sidebar;
