import { Router } from "express";
import controller from "../controllers/auth-controller";

const router = Router();

router.post("/", controller.authenticate);
router.get("/exit", controller.endSession);

export default router;
