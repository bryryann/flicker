import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "../../redux/store";
import { getMoviesById } from "../../services/movies-service";
import MovieListItem from "../MovieListItem";
import Loading from "../Loading";
import { toMovieData } from "../../utils/mappers";
import "./style.css";

type MovieListVariant = "favorites" | "watchlist";

interface MovieListProps {
    variant: MovieListVariant;
}

const MovieList: React.FC<MovieListProps> = ({ variant }) => {
    const ids = useAppSelector(state => state[variant]); //
    const { data, isLoading } = useQuery({
        queryFn: () => getMoviesById(ids),
        queryKey: [variant],
        staleTime: 1000 * 60 * 60 * 3
    });

    if (isLoading) return <Loading />;

    const movies = data?.map(
        (m) => toMovieData(m)
    );

    return (
        <div className="movie-list">
            <h2 className="content-header">
                {
                    variant === "favorites"
                        ? "Favorites"
                        : "Watchlist"
                }
            </h2>
            {
                movies?.map((movie) => (
                    <MovieListItem key={movie.id} movie={movie} />
                ))
            }
        </div>
    )
}

export default MovieList;
