import { Router } from "express";
import controller from "../controllers/users-controller";

const router: Router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.findById);

export default router;
