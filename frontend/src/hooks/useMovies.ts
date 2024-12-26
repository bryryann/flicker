import { useQuery } from "@tanstack/react-query";
import { toMovieData } from "../utils/mappers";
import { UnmapedMovieData, ApiData } from "../types";

const useMovies = (queryFn: () => Promise<ApiData>, key: string) => {
    const { data, isLoading } = useQuery<ApiData>({
        queryFn,
        queryKey: [key],
        staleTime: 1000 * 60 * 60 * 3
    });
    const movies = data?.results.map(
        (m) => toMovieData(m as UnmapedMovieData)
    );

    return {
        movies,
        isLoading
    }
}

export default useMovies;
