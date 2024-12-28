import { Router } from "express";
import controller from "../controllers/favorites-controller";
import auth from "../middleware/require-auth";

const router = Router();

router.use(auth);
router.get("/", controller.getFavorites);
router.get("/:movieId", controller.toggleFavorite);

export default router;
