import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../../services/movies-service";
import { UnmapedMovieData, mapMovie } from "../../utils/mappers";
import "./style.css";

const TrendingMovies: React.FC = () => {
    const { data, isLoading } = useQuery({
        queryFn: getTrendingMovies,
        queryKey: ["trending"],
        staleTime: 1000 * 60 * 60 * 3,
    });
    const movies = data?.results.map(m => mapMovie(m as UnmapedMovieData));
    console.log(movies);

    if (isLoading) return <p>fetching...</p>

    return <p>trending movies</p>
}

export default TrendingMovies;
