import { z } from 'zod'

export const createQuestionSchema = z.object({
    questionText: z.string().min(1,'Question must be at least 1 characters.').max(255, 'Question must be at most 255 characters.'),
    answear: z.string().min(1,'Answear must be at least 1 characters.').max(255, 'Answear must be at most 255 characters.'),
    difficulty: z.enum(["easy","medium","difficult"]),
})

export const questionIdDschema = z.object({
    id: z.uuid(),
})