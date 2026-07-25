import express from 'express'
import cors from 'cors'
import paymentRouter from './routes/payments'

const app = express()
const PORT = process.env.port || 4000

app.use(cors())
app.use('/api', paymentRouter)
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
