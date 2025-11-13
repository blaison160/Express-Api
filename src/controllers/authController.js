import { request, response } from "express";
import bcrypt from "bcrypt";
import { db } from "../db/database.js";
import { users } from "../db/schema.js";
/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
export const register = async (req,res) => {
    try{
        const { email,username,password} = req.body;

        const hashedPassword = await bcrypt.hash(password,12)

       const [newUser]= await db.insert(users).values({
            email,
            username,
            password: hashedPassword,
        }).returning()
        
        res.status(200).json({
            message: 'User created',
            userData: newUser,
            token: 'TOKEN_JWT'
        })
    }catch( error){
        console.error(error)
        res.status(500).json({
            error: 'Register failed',
        })
    }

    


}