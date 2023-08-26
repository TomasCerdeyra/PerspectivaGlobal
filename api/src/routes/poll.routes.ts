import { Router } from "express";
import { getItems, postItems } from "../controllers/poll.controller";

const router = Router();

router.get('/', getItems);

router.post('/', postItems);

export default router;