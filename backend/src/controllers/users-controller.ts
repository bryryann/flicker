import { Request, Response, NextFunction } from "express";
import { usersQuery } from "../db/query";

const selectAll = async (_req: Request, res: Response) => {
    const query = await usersQuery.all();
    res.status(200).json(query);
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
    if (isNaN(req.params.id as any)) {
        return next();
    }
    const query = await usersQuery.find({ id: req.params.id });
    res.status(200).json(query);
}

const findByUsername = async (req: Request, res: Response) => {
    const { username } = req.params;
    const query = await usersQuery.find({ username });
    res.status(200).json(query);
}

export default {
    selectAll,
    findById,
    findByUsername
} satisfies Record<string, Function>;
