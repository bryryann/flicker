import { Router } from "express";
import controller from "../controllers/users-controller";

const router: Router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.findById);
router.get("/:username", controller.findByUsername);
router.post("/", controller.createUser);

export default router;
