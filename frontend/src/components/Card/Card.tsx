import { MovieData } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faEye, faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import "./style.css";

interface CardProps {
    movie: MovieData;
    isFavorite: boolean;
}

const Card: React.FC<CardProps> = ({ movie, isFavorite }) => {
    console.log(`${movie.title} ${movie.id} ${isFavorite}`);
    return (
        <div className="movie-card">
            <div className="poster">
                <div className="favorite-btn">
                    <button>
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
