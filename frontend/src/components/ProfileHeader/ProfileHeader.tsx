import { makeIdString, convertUserDate } from "../../utils/helpers";
import "./style.css";

interface ProfileHeaderProps {
    id: number;
    username: string;
    creationDate: string;
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
        </div>
    )
}

export default ProfileHeader;
