import { db } from '../db/database.js'
import { questions } from '../db/schema.js'
import { request, response } from 'express'
import { eq } from 'drizzle-orm'
/**
 * @param {request} req 
 * @param {response} res 
 */
export const createQuestion = async (req,res) => {
    const {questionText, answer, difficulty} = req.body
    const {userId} = req.user
    console.log(userId)

    try {
        const [newQuestion] = await db.insert(questions).values({questionText,answer,difficulty,createdBy:userId}).returning()
        res.status(201).json({message: 'Question created', data: newQuestion})
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Failed to create question'})
    }
}

/**
 * @param {*} req 
 * @param {*} res 
 */
export const deleteQuestion = async (req,res) => {
    try {
        const {id} = req.params
        const {userId} = req.user
        const [deletedQuestion] = await db.delete(questions).where(eq(questions.id,id)).returning()
        if(!deletedQuestion){
            return res.status(404).json({message: 'Question not found'})
        }
        if(deleteQuestion.createdBy!=userId){
            return res.status(403).json({message: "You do not have the right to delete this question"})
        }
        res.status(200).send({message : `Question ${id} deleted`})
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Failed to delete question'})
    } 
}

export const getAllQuestions = async (req,res) => {
    try {
        const results = await db.select().from(questions).orderBy('created_at','desc')
        res.status(200).json(results)
    } catch (error) {
        console.error(error)
        res.status(500).send({
            error:'Failed to querry questions'
        })
    }
}

/**
 * @param {*} req 
 * @param {*} res 
 */
export const getQuestion = async (req,res) => {
    try {
        const {id} = req.params
        const result = await db.select().from(questions).where(eq(questions.id,id))
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).send({error:'Failed to querry the question'})
    }
}

export const updateQuestion = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}