import { Router } from "express";
import controller from "../controllers/users-controller";

const router: Router = Router();

router.get("/", controller.getAll);

export default router;
