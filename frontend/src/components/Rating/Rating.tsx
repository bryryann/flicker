import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import "./style.css";

interface RatingProps {
    rating: number;
    count: number;
}

const Rating: React.FC<RatingProps> = ({ rating, count }) => {
    const grade =
        rating >= 7
            ? "positive"
            : "negative";

    return (
        <div className="rating-component">
            <div className={`list-rating ${grade}`}>
                {rating.toFixed(1)}
            </div>
            <div className="rating-viewers">
                <FontAwesomeIcon icon={faSmile} />
                {count}
            </div>
        </div>
    )
}

export default Rating;
