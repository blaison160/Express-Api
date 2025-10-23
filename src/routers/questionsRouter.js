import { Router } from "express";
import { createQuestion, deleteQuestion, getAllQuestions } from "../controllers/questionsController.js";
import { validateBody, validateParams } from "../middleware/validation.js";
import { createQuestionSchema, questionIdDschema } from "../models/questions.js";

const router = Router()

router.get('/',getAllQuestions)

router.post('/',validateBody(createQuestionSchema),createQuestion)

router.delete('/:id',validateParams(questionIdDschema),deleteQuestion)

export default router