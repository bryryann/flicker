import https from "https";
import fs from "fs";
import path from "path";
import express, { Request, Response } from "express";
import cors from "cors";
import config from "./utils/config";
import usersRouter from "./routers/users-router";

const app = express();

/* Middlewares */
app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => { res.json({ "version": "0.0.1" }) });

app.use("/users", usersRouter);

const ssl = {
    key: fs.readFileSync(path.join(__dirname, config.SSL.keyPath)),
    cert: fs.readFileSync(path.join(__dirname, config.SSL.certPath)),
};

https.createServer(ssl, app).listen(config.PORT, () => {
    console.log(`server listening on port ${config.PORT}`);
});
