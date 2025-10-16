import express from 'express'
import todosRouter from './routers/todosRouter.js'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/todos',todosRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})