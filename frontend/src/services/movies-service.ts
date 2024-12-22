import axios from "axios"
import config from "../utils/config"

axios.defaults.headers.common = {
    "Authorization": `Bearer ${config.TMDB.API_TOKEN}`,
    "accept": "application/json",
};

interface ApiData {
    page: number,
    results: Array<object>;
    total_pages: number;
    total_results: number;
}

// currently unused
export const getTrendingMovies = async (): Promise<ApiData> => {
    const res = await axios.get(`/api/trending/movie/day?language=en-US`);
    return res.data as ApiData;
}
