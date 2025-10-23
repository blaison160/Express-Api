import { db } from './database.js'
import { questions } from './schema.js'

const seed = async ()=> {
    console.log("starting database seeding...")

    try {
        await db.delete(questions)

        const seedQuestions =[
            {
                questionText: 'Quelle est la cpaitale de la France?',
                answer: 'Paris',
                difficulty: 'easy'
            },
            {
                questionText: 'Quel est le plus grand océan du monde?',
                answer: "L'océan Pacifique",
                difficulty: 'medium'
            },
            {
                questionText: 'Qui a écrit "Les Misérables"?',
                answer: 'Victor Hugo'
            },
        ]
        await db.insert(questions).values(seedQuestions)

        console.log("seeding complete !")
    } catch (error) {
        console.error(error)
    }
}

seed()