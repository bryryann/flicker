import { Request, Response, NextFunction } from "express";
import { users } from "../db/query";

const getAll = async (_req: Request, res: Response) => {
    const query = await users.queryAll();
    res.status(200).json(query);
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (isNaN(id as any)) {
        return next();
    }
    const query = await users.find({ id });
    if (query.length < 1) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(query.shift());
}

const findByUsername = async (req: Request, res: Response) => {
    const { username } = req.params;
    const query = await users.find({ username });
    if (query.length < 1) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(query.shift());
}

export default {
    getAll,
    findById,
    findByUsername,
} satisfies Record<string, Function>;
