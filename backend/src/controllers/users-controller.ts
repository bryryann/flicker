import { Request, Response } from "express";
import { usersQuery } from "../db/query";

const selectAll = async (_req: Request, res: Response) => {
    const query = await usersQuery.all();
    res.status(200).json(query);
};

const findUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const query = await usersQuery.find({ id });
    res.status(200).json(query);
}

export default {
    selectAll,
    findUser
} satisfies Record<string, Function>;
