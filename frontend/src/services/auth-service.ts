import axios from "axios";
import config from "../utils/config";

axios.defaults.withCredentials = true;

export interface AuthCredentials {
    username: string;
    password: string;
}

export const authenticateUser = async (credentials: AuthCredentials) => {
    const res = await axios.post(`${config.SERVER_URL}/auth`, credentials);
    return res.data as { token: string; id: number; isSigned: boolean; };
}

export const endSession = async () => {
    const res = await axios.get(`${config.SERVER_URL}/auth/exit`);
    return res.data;
}
