import https from "https";
import fs from "fs";
import path from "path";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "./utils/config";
import usersRouter from "./routers/users-router";
import authRouter from "./routers/auth-router";
import favoritesRouter from "./routers/favorites-router";
import watchlistRouter from "./routers/watchlist-router";

const app = express();

/* Middlewares */
app.use(express.json());
app.use(cors({
    origin: config.CLIENT_URI,
    credentials: true,
}));
app.use(cookieParser());

app.get("/", (_req: Request, res: Response) => { res.json({ "version": "0.0.1" }) });

app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/favs", favoritesRouter);
app.use("/watchlist", watchlistRouter);

const ssl = {
    key: fs.readFileSync(path.join(__dirname, config.SSL.keyPath)),
    cert: fs.readFileSync(path.join(__dirname, config.SSL.certPath)),
};

https.createServer(ssl, app).listen(config.PORT, () => {
    console.log(`server listening on port ${config.PORT}`);
});
