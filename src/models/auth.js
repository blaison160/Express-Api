import { email, z } from 'zod'

export const registerSchema = z.object({
    email: z.email(),
    username: z.string().min(1,'Username must be at least 1 characters.').max(30,' Username must be at most 30 characters.'),
    password: z.string().min(8,' Password must be at least 8 characters').max(255, 'Password must be at most 255 characters.'),

})

export const userIdDschema = z.object({
    id: z.uuid(),
})

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8).max(255),
})