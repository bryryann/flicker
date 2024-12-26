import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../../redux/store";
import { getMoviesById } from "../../services/movies-service";
import MovieListItem from "../MovieListItem";
import "./style.css";

import Loading from "../Loading";
import { toMovieData } from "../../utils/mappers";

// Watchlist not implemented yet. Component only renders
// user favorites at the moment.

type MovieListVariant = "favorites" | "watchlist";

interface MovieListProps {
    variant?: MovieListVariant;
}

const MovieList: React.FC<MovieListProps> = ({ variant = "favorites" }) => {
    const ids = useAppSelector(state => state.favorites); //
    const { data, isLoading } = useQuery({
        queryFn: () => getMoviesById(ids),
        queryKey: [variant],
        staleTime: 1000 * 60 * 60 * 3
    })

    if (isLoading) return <Loading />;

    const movies = data?.map(
        (m) => toMovieData(m)
    );

    return (
        <div className="movie-list">
            {
                movies?.map((movie) => (
                    <MovieListItem key={movie.id} data={movie} />
                ))
            }
        </div>
    )
}

export default MovieList;
