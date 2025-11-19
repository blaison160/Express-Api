import { request, response } from "express";
import bcrypt from "bcrypt";
import { db } from "../db/database.js";
import { users } from "../db/schema.js";
import jwt from "jsonwebtoken";
import "dotenv/config"
import { eq } from "drizzle-orm";

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
        }).returning({
            email: users.email,
            username: users.username,
            id: users.id
        })

        const token = jwt.sign({userId: newUser.id}, process.env.JWT_SECRET,{expiresIn:'24h'})
        
        res.status(201).json({
            message: 'User created',
            userData: newUser,
            token, // same name as token, no need to "token: token"
        })
    }catch( error){
        console.error(error)
        res.status(500).json({
            error: 'Register failed',
        })
    }

}

export const login = async (req,res) => {
    try {
        const { email,password} = req.body;
        const [user] = await db.select().from(users).where(eq(users.email,email))
        if(!user){
            return res.status(401).json({
                error: "Invalid email or password"
            })
        }
        const isValidPassword = await bcrypt.compare(password,user.password)
        if(!isValidPassword){
            return res.status(401).json({
                error: "Invalid email or password"
            })
        }
        
        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET,{expiresIn:'24h'})

        res.status(200).json({
            message: 'Login succsessful',
            userData: {
                email: user.email,
                username: user.username,
                id: user.id
            },
            token : jwt.sign({userId: user.id}, process.env.JWT_SECRET,{expiresIn:'24h'})
        })
        

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: 'Login failed',
        })
    }
}