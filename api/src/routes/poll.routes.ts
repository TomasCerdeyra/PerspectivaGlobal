import { Router } from "express";
import { getItems } from "../controllers/poll.controller";

const router = Router();

router.get('/', getItems);

export default router;