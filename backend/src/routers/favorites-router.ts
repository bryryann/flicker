import { Router } from "express";
import controller from "../controllers/favorites-controller";
import auth from "../middleware/require-auth";

const router = Router();

router.use(auth);
router.get("/", controller.testConnection);

export default router;
