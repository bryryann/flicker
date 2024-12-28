import { QueryResultRow } from "pg";
import client from "./client";

/* helper function */
function getConditions(keys: string[]): string {
    for (let i = 0; i < keys.length; i++) {
        keys[i] = `${keys[i]} = $${i + 1}`;
    }
    return keys.join(" AND ");
}
/** */

type ConditionArray = Record<string, string>;

class Query {
    protected db: string;

    constructor(db: string) { this.db = db; }

    async queryAll(...params: string[]): Promise<QueryResultRow> {
        const fields = params.length < 1 ? ["*"] : params;
        const query = await client.query(`SELECT ${fields} FROM ${this.db}`);
        return query.rows;
    }

    async find(condition: ConditionArray, ...params: string[]): Promise<QueryResultRow> {
        const fields = params.length < 1 ? ["*"] : params;
        const keys: string = getConditions(Object.keys(condition));

        const query = await client.query(
            `SELECT ${fields} FROM ${this.db} WHERE ${keys}`,
            Object.values(condition)
        );
        return query.rows;
    }

    async new(fields: Record<string, string>): Promise<void> {
        const keys = Object.keys(fields);
        const vals = Object.values(fields);
        for (let i = 0; i < vals.length; i++) {
            vals[i] = `$${i + 1}`;
        }

        await client.query(
            `INSERT INTO ${this.db} (${keys.join(", ")}) VALUES (${vals.join(", ")})`,
            Object.values(fields)
        );
    }

    async delete(fields: Record<string, string>): Promise<void> {
        const keys = getConditions(Object.keys(fields));
        await client.query(`DELETE FROM ${this.db} WHERE ${keys}`, Object.values(fields));
    }

    async exists(condition: ConditionArray) {
        const query = await this.find(condition);
        return query.length > 0;
    }
}

export const users = new Query("users");
export const favorites = new Query("favorites");
export const watchlist = new Query("watchlists");
