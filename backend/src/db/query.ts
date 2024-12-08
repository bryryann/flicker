import client from "./client";
import { QueryResult } from "pg";

class Query {
    private db: string;

    constructor(db: string) { this.db = db; }

    async all(...params: string[]): Promise<any[]> {
        const columns: string[] = params.length < 1 ? ["*"] : params;
        const res: QueryResult =
            await client.query(`SELECT ${columns} from ${this.db}`);
        return res.rows;
    }
}

export const usersQuery = new Query("users");
