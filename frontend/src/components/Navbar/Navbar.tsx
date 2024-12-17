import { useAppDispatch } from "../../redux/store";
import { resetUser } from "../../redux/user-slice";
import { endSession } from "../../services/auth-service";
import Button from "../Button";
import "./style.css";

const Navbar: React.FC = () => {
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
            <Button onClick={handleLogOff}>Log Off</Button>
        </nav>
    )
};

export default Navbar;
