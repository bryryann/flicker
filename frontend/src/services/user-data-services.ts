import axios from "axios";
import config from "../utils/config";

axios.defaults.withCredentials = true;

export const getFavorites = async (): Promise<number[]> => {
    const res = await axios.get(`${config.SERVER_URL}/favs`);
    return res.data as number[];
}
