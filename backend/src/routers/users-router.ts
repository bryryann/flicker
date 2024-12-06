import express, { Router } from "express";
import controller from "../controllers/users-controller";

const router: Router = express.Router();

router.get("/", controller.selectAll);

export default router;
