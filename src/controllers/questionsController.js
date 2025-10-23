export const getAllQuestions = (req,res) =>{
    res.status(200).send([
        {
            id : "1",
            question: "Quelle est la capitale de la France ?",
            answer: "Paris"
        },
    ])
}

export const createQuestion = (req,res) => {
    const {question, answear} = req.body

    if (!question || !answear){
        return res.status(400).send({error: 'Question or answear undefined'})
    }

    return res.status(201).send({message: 'Question created'})
}

export const deleteQuestion = (req,res) => {
    const {id} = req.params

    res.status(200).send({message : `Question ${id} deleted`})
}