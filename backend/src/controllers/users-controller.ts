import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { usersQuery } from "../db/query";
import config from "../utils/config";

const selectAll = async (_req: Request, res: Response) => {
    const query = await usersQuery.all();
    res.status(200).json(query);
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
    if (isNaN(req.params.id as any)) {
        return next();
    }
    const query = await usersQuery.find({ id: req.params.id });
    if (!query) res.status(404).json({ error: "User not found" });
    res.status(200).json(query);
};

const findByUsername = async (req: Request, res: Response) => {
    const { username } = req.params;
    const query = await usersQuery.find({ username });
    if (!query) res.status(404).json({ error: "User not found" });
    res.status(200).json(query);
};

const createUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(401).json({ error: "Missing username/email/password" });
        return;
    }

    const usedUser = await usersQuery.find({ username });
    const usedEmail = await usersQuery.find({ email });
    if (usedUser || usedEmail) {
        res.status(401).json({ error: "User/Email already registered" });
        return;
    }

    const passwordHash = await bcrypt.hash(password, Number(config.SALT!));

    await usersQuery.create({ username, email, passwordHash });

    res.status(201).json({ message: `User created` });
}

export default {
    selectAll,
    findById,
    findByUsername,
    createUser
} satisfies Record<string, Function>;
