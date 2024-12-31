import { useParams } from "react-router-dom";
import "./style.css";

const Profile: React.FC = () => {
  const { userId } = useParams();
  return <p>{userId}</p>;
}

export default Profile;
