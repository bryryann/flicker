import axios from "axios";
import config from "../utils/config";

axios.defaults.withCredentials = true;

export interface AuthCredentials {
    username: string;
    password: string;
}

export const authenticateUser = async (credentials: AuthCredentials) => {
    const res = await axios.post(`${config.SERVER_URI}/auth`, credentials);
    return res.data as { token: string; isSigned: boolean; };
}

export const endSession = async () => {
    const res = await axios.get(`${config.SERVER_URI}/auth/exit`);
    return res.data;
}
