import { Request, Response } from "express";
import client from "../db/client";

const selectAll = async (_req: Request, res: Response) => {
    const query = await client.query("SELECT * FROM users");
    res.status(200).json(query.rows);
};

export default {
    selectAll
} satisfies Record<string, Function>;
