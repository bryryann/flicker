import { useAppSelector, useAppDispatch } from "../../redux/store";
import { resetUser } from "../../redux/user-slice";
import { endSession } from "../../services/auth-service";
import Button from "../Button";
import "./style.css";

const Navbar: React.FC = () => {
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const handleLogOff = () => {
        const logoff = async () => {
            const msg = await endSession();
            console.log(msg);
            dispatch(resetUser());
        }

        logoff();
    }

    return (
        <nav>
            <div className="navbar-title">
                <a href="/app" >Flicker</a>
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
