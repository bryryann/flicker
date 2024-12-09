import https from "https";
import fs from "fs";
import path from "path";
import express, { Request, Response } from "express";
import cors from "cors";
import config from "./utils/config";
import usersRouter from "./routers/users-router";

const options = {
    cert: fs.readFileSync(path.dirname(__dirname) + "/src/cert/certificate.pem"),
    key: fs.readFileSync(path.dirname(__dirname) + "/src/cert/private-key.pem"),
};
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => { res.json({ version: '0.0.1' }) });

app.use("/users", usersRouter);

https.createServer(options, app).listen(config.PORT, () => {
    console.log(`server listening on https://localhost:${config.PORT}`);
});
