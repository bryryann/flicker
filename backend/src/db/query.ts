import client from "./client";
import { QueryResult } from "pg";

type TargetType = Record<string, string>;

interface UserToCreate {
    username: string;
    passwordHash: string;
    email: string;
};

class Query {
    private db: string;

    constructor(db: string) { this.db = db; }

    async all(...params: string[]): Promise<any[]> {
        const columns: string[] = params.length < 1 ? ["*"] : params;
        const res: QueryResult =
            await client.query(`SELECT ${columns} from ${this.db}`);

        return res.rows;
    }

    async find(target: TargetType, ...params: string[]): Promise<any> {
        const columns: string[] = params.length < 1 ? ["*"] : params;
        const key = Object.keys(target).shift()!;
        const res: QueryResult =
            await client.query(`SELECT ${columns} from ${this.db} WHERE ${key} = $1`, [target[key]]);

        return res.rows.shift();
    }

    async create(user: UserToCreate): Promise<void> {
        await client.query(
            `INSERT INTO ${this.db} (username, password_hash, email) VALUES ($1, $2, $3);`,
            [user.username, user.passwordHash, user.email]
        );
    }
}

export const usersQuery = new Query("users");
