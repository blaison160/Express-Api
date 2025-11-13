import express from 'express'
import questionsRouter from './routers/questionsRouter.js'
import usersRouter from './routers/usersRouter.js'
import authRouter from "./routers/authRouter.js"
import logger from './middleware/logger.js'

const app = express()

app.use(express.json())
app.use(logger)
const PORT = process.env.PORT || 3000

app.use('/questions',questionsRouter)
app.use('/users',usersRouter)
app.use('/auth',authRouter)


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
