import { Router } from "express";
import { createQuestion, deleteQuestion, getAllQuestions, getQuestion, updateQuestion } from "../controllers/questionsController.js";
import { validateBody, validateParams } from "../middleware/validation.js";
import { createQuestionSchema, questionIdDschema } from "../models/questions.js";
import { authenticateToken } from "../middleware/authenticateToken.js";

const router = Router()

router.use(authenticateToken)

router.get('/',getAllQuestions)

router.post('/',validateBody(createQuestionSchema),createQuestion)

router.delete('/:id',validateParams(questionIdDschema),deleteQuestion)

router.get('/:id',validateParams(questionIdDschema),getQuestion)

router.patch('/:id',validateBody(createQuestionSchema),updateQuestion)

export default router