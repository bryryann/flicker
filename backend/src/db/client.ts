import pg from "pg";
import config from "../utils/config";

const client = new pg.Pool(config.DBConnection);

export default client;
