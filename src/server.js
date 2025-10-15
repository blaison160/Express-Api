import http from 'http'
import express from 'express'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

app.router.get('/questions',(req,res) =>{
    res.status(200).send([
        {
            id : "0",
            question: "Quelle est la capitale de la France ?",
            answer: "Paris"
        },
    ])
})

app.post('/questions',(req,res) =>{
    const {question, answear} = req.body

    if (!question || !answear){
        return res(400).send({error: 'Question or answear undefined'})
    }

    return res(201).send({message: 'Question created'})

})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

