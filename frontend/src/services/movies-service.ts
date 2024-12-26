import axios from "axios"
import { ApiData, UnmapedMovieData } from "../types";
import config from "../utils/config"

axios.defaults.headers.common = {
    "Authorization": `Bearer ${config.TMDB.API_TOKEN}`,
    "accept": "application/json",
};

export const getTrendingMovies = async (): Promise<ApiData> => {
    const res = await axios.get(`/api/trending/movie/day?language=en-US`);
    return res.data as ApiData;
}

export const getMoviesById = async (idList: number[])
    : Promise<UnmapedMovieData[]> => {
    const movieList = [];
    for (let id of idList) {
        const res = await axios.get(`/api/movie/${id}?language=en-US`);
        movieList.push(res.data);
    }
    return movieList as UnmapedMovieData[];
}
