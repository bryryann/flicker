import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../utils/config";
import { users } from "../db/query";

const testConnection = async (req: Request, res: Response) => {
    const { username } = req.params;
    if (await users.exists({ username })) {
        return res.status(200).send("exists");
    }
    res.status(200).send("not exists");
}

const authenticate = async (req: Request, res: Response): Promise<any> => {
    const { username, password } = req.body;
    if (!username || !password)
        return res.status(400).json({ error: "Missing username/password" });

    const query = await users.find({ username });
    if (query.length < 1)
        return res.status(401).json({ error: "User not found" });

    const user = query.shift();

    const passwordMatch = await bcrypt.compare(password, user.password_hash!);

    if (!passwordMatch)
        return res.status(401).json({ error: "Wrong password" });

    const payload = {
        id: user.id,
        username: user.username,
        email: user.email
    };

    const token = jwt.sign(payload, config.JWT!);

    res.cookie("USERTOKEN", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 2
    });
    res.status(200).json({ token, user: username.user });
}

export default {
    testConnection,
    authenticate
} satisfies Record<string, Function>;
