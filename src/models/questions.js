import { z } from 'zod'

export const createQuestionSchema = z.object({
    questionText: z.string().min(1,'Question must be at least 1 characters.').max(255, 'Question must be at most 255 characters.'),
    answer: z.string().min(1,'Answer must be at least 1 characters.').max(255, 'Answer must be at most 255 characters.'),
    difficulty: z.enum(["easy","medium","difficult"]),
})

export const questionIdDschema = z.object({
    id: z.uuid(),
})