import { db } from '../db/database.js'
import { users } from '../db/schema.js'

export const getAllUsers = async (req,res) => {
    try {
        const results = await db.select().from(users).orderBy('created_at','desc')
        res.status(200).json(results)
    } catch (error) {
        res.status(500).send({
            error:'Failed to querry users'
        })
    }
}

