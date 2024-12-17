import { useAppSelector } from "../../redux/store";
import Navbar from "../../components/Navbar";
import "./style.css";

const Dashboard: React.FC = () => {
    const user = useAppSelector(state => state.user);
    return (
        <main>
            <Navbar />
        </main>
    )
}

export default Dashboard;
