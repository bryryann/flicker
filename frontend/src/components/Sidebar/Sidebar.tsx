import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import "./style.css"

const Sidebar: React.FC = () => {
    const { id } = useAppSelector(state => state.user);
    return (
        <div className="main-sidebar">
            <ul className="sidebar-anchors">
                <Link to="favorites">Favorites</Link>
                <br />
                <Link to="watchlist">Watchlist</Link>
                <br />
            </ul>
            <div className="sidebar-profile">
                <Link to={`/user/${id}`}>My Profile(W.I.P)</Link>
            </div>
        </div>
    )
}

export default Sidebar;
