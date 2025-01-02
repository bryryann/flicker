import axios from "axios";
import config from "../utils/config";
import { UserData } from "../types";

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

export const findUser = async (id: number | string): Promise<UserData> => {
    const res = await axios.get(`${config.SERVER_URL}/users/${id}`);
    return res.data as UserData;
};
