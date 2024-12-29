import axios from "axios";
import config from "../utils/config";

axios.defaults.withCredentials = true;

export const getFavorites = async (): Promise<number[]> => {
    const res = await axios.get(`${config.SERVER_URL}/favs`);
    return res.data as number[];
}

export const callFavoriteToggle = async (id: number): Promise<void> => {
    await axios.get(`${config.SERVER_URL}/favs/${id}`);
}

export const getWatchlist = async (): Promise<number[]> => {
    const res = await axios.get(`${config.SERVER_URL}/watchlist`);
    return res.data as number[];
}

export const callWatchlistToggle = async (id: number): Promise<void> => {
    await axios.get(`${config.SERVER_URL}/watchlist/${id}`);
}
