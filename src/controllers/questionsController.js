export const createQuestion = (req,res) => {
    const {question, answer} = req.body

    if (!question || !answer){
        return res.status(400).send({error: 'Question or answer undefined'})
    }

    return res.status(201).send({message: 'Question created'})
}

export const deleteQuestion = (req,res) => {
    const {id} = req.params

    res.status(200).send({message : `Question ${id} deleted`})
}

export const getAllQuestions = async (req,res) => {
    try {
        const results = await db.select().from(questions).orderBy('created_at','desc')
        res.status(200).json(results)
    } catch (error) {
        res.status(500).send({
            error:'Failed to querry questions'
        })
    }
}