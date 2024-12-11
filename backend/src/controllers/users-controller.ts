import { Request, Response } from "express";
import client from "../db/client";

const getAll = async (_req: Request, res: Response): Promise<void> => {
    const query = await client.query("SELECT * FROM users");
    res.json(query.rows);
};

export default {
    getAll
} satisfies Record<string, Function>;
