import { MovieData } from "../../types";
import { callFavoriteToggle } from "../../services/user-data-services";
import { useAppDispatch } from "../../redux/store";
import { toggleFavorite } from "../../redux/favorites-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faEye, faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import "./style.css";

interface CardProps {
    movie: MovieData;
    isFavorite: boolean;
}

const Card: React.FC<CardProps> = ({ movie, isFavorite }) => {
    const dispatch = useAppDispatch();

    const handleFavorite = async () => {
        dispatch(toggleFavorite(movie.id));
        await callFavoriteToggle(movie.id);
    }

    return (
        <div className="movie-card">
            <div className="poster">
                <div className="favorite-btn">
                    <button onClick={handleFavorite}>
                        {
                            isFavorite
                                ? <FontAwesomeIcon icon={faStarSolid} id="star-icon" />
                                : <FontAwesomeIcon icon={faStarRegular} id="star-icon" />
                        }
                    </button>
                </div>
                <img src={`https://image.tmdb.org/t/p/w400${movie.posterPath}`} />
                <div className="content">
                    <div className="rating">
                        <div>
                            <FontAwesomeIcon icon={faFire} />
                            <p>{movie.voteAverage === 0 ? "?" : movie.voteAverage.toFixed(1)}</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEye} />
                            <p>{movie.voteCount}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p>{movie.title}</p>
        </div>
    )
}

export default Card;
