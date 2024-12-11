import { Request, Response } from "express";
import { users } from "../db/query";

const getAll = async (_req: Request, res: Response): Promise<void> => {
    const query = await users.queryAll();
    res.status(200).json(query);
};

const findById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    if (isNaN(id as any)) {
        res.status(401).json({ error: "Invalid ID" });
        return;
    }
    const query = await users.find({ id });
    if (query.length < 1) {
        res.status(404).json({ error: "User not found" });
        return;
    }
    res.status(200).json(query.shift());
}

export default {
    getAll,
    findById
} satisfies Record<string, Function>;
