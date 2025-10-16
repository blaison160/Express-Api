import { Router } from "express";
import { createToto, getTodo, updateTodo} from "./controllers/todosController.js";

const router = Router()

router.post('/', createToto)

router.get('/:id',getTodo)

router.patch('/id:',updateTodo)

export default router