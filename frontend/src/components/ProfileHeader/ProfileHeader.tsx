import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-regular-svg-icons";
import { makeIdString, convertUserDate } from "../../utils/helpers";
import "./style.css";

interface ProfileHeaderProps {
    id: number;
    username: string;
    creationDate: string;
    favCount: number;
    planCount: number;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = (props) => {
    return (
        <div className="profile-header">
            <div className="profile-info">
                <h2>{props.username}</h2>
                <p>{makeIdString(props.id)}</p>
                <div className="profile-dates">
                    <p>
                        Joined: {convertUserDate(props.creationDate)}
                    </p>
                </div>
            </div>
            <div className="user-movies-info">
                <p>
                    <span>
                        <FontAwesomeIcon icon={faStar} />
                        Favorites:
                    </span>
                    {props.favCount}
                </p>
                <p>
                    <span>
                        <FontAwesomeIcon icon={faClock} />
                        Plan-To-Watch:
                    </span>
                    {props.planCount}
                </p>
            </div>
        </div>
    )
}

export default ProfileHeader;
