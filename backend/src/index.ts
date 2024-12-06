import express, { Request, Response } from "express";
import cors from "cors";
import config from "./utils/config";
import usersRouter from "./routers/users-router";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => { res.json({ version: '0.0.1' }) });

app.use("/users", usersRouter);

app.listen(config.PORT, () => console.log(`server listening on port ${config.PORT}`));
