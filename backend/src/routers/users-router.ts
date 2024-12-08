import express, { Router } from "express";
import controller from "../controllers/users-controller";

const router: Router = express.Router();

router.get("/", controller.selectAll);
router.get("/:id", controller.findUser);

export default router;
