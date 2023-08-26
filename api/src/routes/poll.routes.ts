import { Router } from "express";
import { calculateTotal, getItems, postItems } from "../controllers/poll.controller";

const router = Router();

router.get('/', getItems);
router.get('/getItem/:id/calculateTotal/:option', calculateTotal)

router.post('/', postItems);

export default router;