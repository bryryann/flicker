import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { users, favorites, watchlist } from "../db/query";
import config from "../utils/config";
import { movieIdMapper } from "../utils/helpers";

const getAll = async (_req: Request, res: Response) => {
    const query = await users.queryAll();
    res.status(200).json(query);
};

const findById = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { id } = req.params;
    if (isNaN(id as any)) {
        return next();
    }
    const query = await users.find({ id });
    if (query.length < 1) {
        return res.status(404).json({ error: "User not found" });
    }

    const userFavorites = await favorites.find({ user_id: id }, "movie_id");
    const userWatchlist = await watchlist.find({ user_id: id }, "movie_id");

    res.status(200).json({
        ...query.shift(),
        favorites: movieIdMapper(userFavorites),
        watchlist: movieIdMapper(userWatchlist),
    });
};

const findByUsername = async (req: Request, res: Response): Promise<any> => {
    const { username } = req.params;
    const query = await users.find({ username });
    if (query.length < 1) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(query.shift());
};

const createUser = async (req: Request, res: Response): Promise<any> => {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
        return res.status(400).json({ error: "Missing username/email/password" });

    if (await users.exists({ username }))
        return res.status(400).json({ error: "User already taken" });
    if (await users.exists({ email }))
        return res.status(400).json({ error: "Email already registered" });

    const passwordHash = await bcrypt.hash(password, config.SALT);

    await users.new({ username, email, password_hash: passwordHash });
    res.status(201).json({ message: `${username} registered successfully` });
};

export default {
    getAll,
    findById,
    findByUsername,
    createUser
} satisfies Record<string, Function>;
