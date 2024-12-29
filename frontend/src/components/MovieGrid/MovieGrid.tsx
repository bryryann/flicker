import { getTrendingMovies } from "../../services/movies-service";
import { useAppSelector } from "../../redux/store";
import useMovies from "../../hooks/useMovies";
import Card from "../Card";
import Loading from "../Loading";
import "./style.css";

// Search functionality not currently implemented
type MovieVariants = "trending" | "search";

interface MovieGridProps {
    variant: MovieVariants
}

const MovieGrid: React.FC<MovieGridProps> = () => {
    const favorites: number[] = useAppSelector(state => state.favorites);
    const watchlist: number[] = useAppSelector(state => state.watchlist);
    const { movies, isLoading } = useMovies(getTrendingMovies, "trending");

    if (isLoading) return <Loading />

    return (
        <div className="movie-grid">
            <h2 className="content-header">Trending</h2>
            <div className="grid-content">
                {movies?.map(m => (
                    <Card
                        key={m.id}
                        movie={m}
                        isFavorite={favorites.includes(m.id)}
                        isWatchlist={watchlist.includes(m.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default MovieGrid;
