import "./style.css"

const Sidebar: React.FC = () => {
    return (
        <div className="main-sidebar">
            <ul className="sidebar-anchors">
                <a href="#">Favorites (W.I.P)</a>
                <br />
                <a href="#">Watchlist (W.I.P)</a>
                <br />
            </ul>
            <div className="sidebar-profile">
                <a href="#">My Profile (W.I.P)</a>
            </div>
        </div>
    )
}

export default Sidebar;
