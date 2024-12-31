import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../utils/config";
import { users } from "../db/query";

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
        sameSite: "strict"
    });
    res.status(200).json({ token, id: user.id, user: username.user, isSigned: true });
}

const endSession = async (req: Request, res: Response): Promise<any> => {
    const { USERTOKEN } = req.cookies;
    if (!USERTOKEN)
        return res.status(400).json({ error: "No current session" });

    res.clearCookie("USERTOKEN").status(201).json({ message: "Session ended" });
}

export default {
    authenticate,
    endSession
} satisfies Record<string, Function>;
