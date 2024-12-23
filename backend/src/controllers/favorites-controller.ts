import { Request, Response } from "express";

const testConnection = async (req: Request, res: Response): Promise<any> => {
    console.log(res.locals.user);
    res.status(200).json({ "message": "authorized" });
}

export default {
    testConnection,
} satisfies Record<string, Function>;
