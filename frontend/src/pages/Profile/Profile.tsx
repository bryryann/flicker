import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { findUser } from "../../services/users-service";
import { UserData } from "../../types";
import Loading from "../../components/Loading";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import "./style.css";

const Profile: React.FC = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const findAsync = async (id: string) => {
      const res = await findUser(id);
      setUserData(res);
    }
    findAsync(userId!);
  }, []);

  if (!userData) return <Loading />

  return (
    <div className="profile-page">
      <div className="back-btn">
        <Link to="/app/" >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </Link>
      </div>
      <div className="profile-content-container">
        <ProfileHeader
          id={userData.id}
          username={userData.username}
          creationDate={userData.created_at}
        />
      </div>
    </div>
  )
}

export default Profile;
