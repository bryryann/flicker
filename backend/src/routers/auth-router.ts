import { Router } from "express";
import controller from "../controllers/auth-controller";

const router = Router();

router.post("/", controller.authenticate);

export default router;
