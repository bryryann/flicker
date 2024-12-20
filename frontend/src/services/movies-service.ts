import axios from "axios"
import config from "../utils/config"

axios.defaults.headers.common = {
    "Authorization": `Bearer ${config.TMDB.API_TOKEN}`,
};

