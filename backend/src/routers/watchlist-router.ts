import { Router } from "express";
import controller from "../controllers/watchlist-controller";
import auth from "../middleware/require-auth";

const router = Router();

router.use(auth);
router.get("/", controller.getWatchlist);
router.get("/:movieId", controller.toggleWatchlist);

export default router;
