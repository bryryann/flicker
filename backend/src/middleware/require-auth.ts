import { Request, Response, NextFunction } from "express";
import { VerifiedToken } from "../types";
import config from "../utils/config";
import jwt from "jsonwebtoken";

export default function auth(req: Request, res: Response, next: NextFunction): any {
    const { USERTOKEN } = req.cookies;
    if (!USERTOKEN) {
        return res.status(401).json({ error: "401 Unauthorized" });
    }
    const token = jwt.verify(USERTOKEN, config.JWT!);
    res.locals.user = token as VerifiedToken;
    next()
}
