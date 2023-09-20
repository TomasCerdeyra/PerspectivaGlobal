import { Router } from "express";
import { calculateTotal, getItemMostSearched, getItems, postItems, getItemById, getItemByCategory } from "../controllers/poll.controller";

const router = Router();

router.get('/', getItems);
router.get('/getItem/:id', getItemById)
router.get('/getItem/:id/calculateTotal/:option', calculateTotal)
router.get('/getMostSearched', getItemMostSearched);
router.get('/getPerCategory/:category', getItemByCategory);

router.post('/', postItems);

export default router;