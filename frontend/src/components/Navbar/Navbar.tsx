import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { endSession } from "../../services/auth-service";
import { performLogoff } from "../../redux/actions/loginActions";
import Button from "../Button";
import "./style.css";

const Navbar: React.FC = () => {
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const handleLogOff = () => {
        const logoff = async () => {
            const msg = await endSession();
            dispatch(performLogoff());
            console.log(msg);
        }

        logoff();
    }

    return (
        <nav>
            <div className="navbar-title">
                <Link to="/app">Flicker</Link>
            </div>
            <div className="profiler">
                <p>{user.user}</p>
                <Button
                    variant="borderless"
                    onClick={handleLogOff}
                    className="logoff-btn"
                >
                    Log Off
                </Button>
            </div>
        </nav>
    )
};

export default Navbar;
