import { MovieData } from "../../types";
import ListItemData from "../ListItemData";
import Rating from "../Rating";
import "./style.css";

interface MovieListItemProps {
    movie: MovieData;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
    return (
        <div className="movie-list-item">
            <div className="item-content">
                <img src={`https://image.tmdb.org/t/p/w300${movie.posterPath}`} />
                <div className="item-data">
                    <ListItemData
                        title={movie.title}
                        id={movie.id}
                        releaseDate={movie.releaseDate}
                    />
                    <Rating
                        rating={movie.voteAverage}
                        count={movie.voteCount}
                    />
                </div>
                <div className="item-data-btn">
                </div>
            </div>
        </div>
    )
}

export default MovieListItem;
