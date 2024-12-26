import axios from "axios"
import config from "../utils/config"
import { ApiData } from "../types";

axios.defaults.headers.common = {
    "Authorization": `Bearer ${config.TMDB.API_TOKEN}`,
    "accept": "application/json",
};

export const getTrendingMovies = async (): Promise<ApiData> => {
    const res = await axios.get(`/api/trending/movie/day?language=en-US`);
    return res.data as ApiData;
}

// https://api.themoviedb.org/3/movie/
