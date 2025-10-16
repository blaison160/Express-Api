import { writeFile } from 'fs';
import {readFile} from 'fs/promises'

import { readTodos } from "./exercice1/utils/readTodos"
import { error } from 'console';
import { text } from 'express';

export const createTodo = (req,res) =>{
    const {text, completed} = req.body
    const id = crypto.randomUUID()
    
    if(!completed){
        completed = false
    }

    if (!text){
        return res(400).send({error: 'Invalid body'})
    }

    todos = readTodos()
    if(todos instanceof Array) {
        todos.push([id,text,completed])
    }
    saveTodos("../todos.json")
    return res(201).send({message: 'ToDo created'})
}


async function saveTodos(file) {
    const json = JSON.stringify(todos,null, 2);
    await writeFile(file,json,'utf8',()=> console.log("saved !"))
}


export const getTodo = (req,res) => {
    const {id} = req.params
    todo = readTodos.find(randomUUID == id)
    if(!todo){
        return res(404).send({error: "Not found"})
    }
    return res(200).send({todo})
}


export const deleteQuestion = (req,res) => {
    const {id} = req.params

    res.status(200).send({message : `Question ${id} deleted`})
}