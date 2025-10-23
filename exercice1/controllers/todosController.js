import { writeFile } from 'fs/promises'
import { randomUUID } from 'crypto';

import readTodo from "../utils/readTodos.js"
import { error } from 'console';
import { text } from 'express';

export const createTodo = async (req,res) =>{
    try {
        const {text, completed = false} = req.body //completed false PAR DEFAUT

        if (!text.trim() || typeof completed !== 'boolean'){
            return res.status(400).send({
                error: 'Invalid body'
            })
        }

        const todos = await readTodo()
        todos.push({
            id: crypto.randomUUID(),
            text :text.trim(),
            completed : completed
        })

        await writeFile('exercice1/todos.json',JSON.stringify(todos))
        return res.status(201).send({
            message: 'ToDo created'
        })
        
    } catch(error) {
        console.log(error)
        res.status(500).send({
            error: 'Internal server error'
        })
    }
}

export const getTodo = (req,res) => {
    const {id} = req.params
    todo = readTodo.find(randomUUID == id)
    if(!todo){
        return res.status(404).send({error: "Not found"})
    }
    return res.status(200).send({todo})
}


export const deleteQuestion = (req,res) => {
    const {id} = req.params

    res.status(200).send({message : `Question ${id} deleted`})
}