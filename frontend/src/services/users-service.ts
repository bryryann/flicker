import axios from "axios";
import config from "../utils/config";

export interface SignUpUser {
    username: string;
    email: string;
    password: string;
}

axios.defaults.withCredentials = true;

export const createUser = async (user: SignUpUser) => {
    const res = await axios.post(`${config.SERVER_URL}/users`, user);
    return res.data;
};
