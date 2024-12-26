import { MovieData } from "../../types";
import "./style.css";

interface MovieListItemProps {
    data: MovieData;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ data }) => {
    return (
        <div className="movie-list-item">
            <p>{data.title}</p>
        </div>
    )
}

export default MovieListItem;
