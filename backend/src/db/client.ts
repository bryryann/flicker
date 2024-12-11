import pg from "pg";
import config from "../utils/config";

export default new pg.Pool(config.DBConnection);
