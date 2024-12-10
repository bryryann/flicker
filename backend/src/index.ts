import express, { Request, Response } from "express";
import cors from "cors";
import config from "./utils/config";

const app = express();

/* Middlewares */
app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => { res.json({ "version": "0.0.1" }) });

app.listen(config.PORT, () => {
    console.log(`server listening on port ${config.PORT}`);
});
