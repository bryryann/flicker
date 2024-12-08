import { Request, Response } from "express";
import { usersQuery } from "../db/query";

const selectAll = async (_req: Request, res: Response) => {
    const query = await usersQuery.all();
    res.status(200).json(query);
};

export default {
    selectAll
} satisfies Record<string, Function>;
