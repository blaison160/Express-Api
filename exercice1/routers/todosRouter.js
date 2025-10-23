import { Router } from "express";
import { createTodo, getTodo } from '../controllers/todosController.js';

const router = Router()

router.post('/', createTodo)
/*
router.get('/:id',getTodo)

router.patch('/:id',updateTodo)
*/
export default router