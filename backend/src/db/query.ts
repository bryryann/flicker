import { QueryResultRow } from "pg";
import client from "./client";

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
}

// Helper function -> Turns array of strings in a SQL conditional string
function getConditions(keys: string[]): string {
    for (let i = 0; i < keys.length; i++) {
        keys[i] = `${keys[i]} = $${i + 1}`;
    }
    return keys.join(" AND ");
}

export const users = new Query("users");
