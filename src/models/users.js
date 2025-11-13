import { z } from 'zod'

export const createUserSchema = z.object({
    username: z.string().max(30,' Username must be at most 30 characters.').min(1,'Username must be at least 1 characters.'),
    password: z.string().min(8,' Password must be at least 8 characters').max(255, 'Password must be at most 255 characters.'),

})

export const userIdDschema = z.object({
    id: z.uuid(),
})