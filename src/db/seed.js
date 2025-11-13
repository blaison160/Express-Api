import { email } from 'zod'
import { db } from './database.js'
import { questions, users } from './schema.js'
import bcrypt from 'bcrypt';

const seed = async ()=> {
    console.log("starting database seeding...")

    try {
        await db.delete(users)

        const hashedPassword1 = await bcrypt.hash("passwd",12)
        const hashedPassword2 = await bcrypt.hash("123passwd",12)
        const seedUsers = [
            {
                email: "email1@mail.ext",
                username: "User1",
                password: hashedPassword1,
            },
            {
                email: "email1@mai2.ext",
                username: "User2",
                password: hashedPassword2,
            },
        ]

        const ids = await db.insert(users).values(seedUsers).returning()

        await db.delete(questions)

        const seedQuestions =[
            {
                questionText: 'Quelle est la cpaitale de la France?',
                answer: 'Paris',
                difficulty: 'easy',
                createdBy: ids[0].id
            },
            {
                questionText: 'Quel est le plus grand océan du monde?',
                answer: "L'océan Pacifique",
                difficulty: 'medium',
                createdBy: ids[0].id
            },
            {
                questionText: 'Qui a écrit "Les Misérables"?',
                answer: 'Victor Hugo',
                createdBy: ids[1].id
            },
        ]
        await db.insert(questions).values(seedQuestions)

        console.log("seeding complete !")
    } catch (error) {
        console.error(error)
    }
}

seed()