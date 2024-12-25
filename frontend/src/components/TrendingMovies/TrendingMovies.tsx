import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../../services/movies-service";
import { toMovieData } from "../../utils/mappers";
import { UnmapedMovieData } from "../../types";
import Card from "../Card";
import { useAppSelector } from "../../redux/store";
import "./style.css";

const TrendingMovies: React.FC = () => {
    const favorites: number[] = useAppSelector(state => state.favorites);
    const { data, isLoading } = useQuery({
        queryFn: getTrendingMovies,
        queryKey: ["trending"],
        staleTime: 1000 * 60 * 60 * 3,
    });
    const movies = data?.results.map(m => toMovieData(m as UnmapedMovieData));

    if (isLoading) return <p>fetching...</p>

    return (
        <>
            <h2 className="trending-header">Trending</h2>
            <div className="trending-movie-grid">
                {movies?.map(m => (
                    <Card
                        key={m.id}
                        movie={m}
                        isFavorite={favorites.includes(m.id)}
                    />
                ))}
            </div>
        </>
    )
}

export default TrendingMovies;
