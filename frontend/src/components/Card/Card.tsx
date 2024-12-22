import { MovieData } from "../../types";
import { convertApiDate } from "../../utils/helpers";
import "./style.css";

interface CardProps {
    movie: MovieData
}

const Card: React.FC<CardProps> = ({ movie }) => {
    // console.log(movie);
    return (
        <div className="movie-card">
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w400${movie.posterPath}`} />
                <div className="content">
                    <div className="rating">
                        <p>{movie.voteAverage === 0 ? "?" : movie.voteAverage.toFixed(1)}</p>
                        <p>{movie.voteCount}</p>
                    </div>
                    <div className="release">
                        <p>{convertApiDate(movie.releaseDate)}</p>
                    </div>
                </div>
            </div>
            <p>{movie.title}</p>
        </div>
    )
}

export default Card;
