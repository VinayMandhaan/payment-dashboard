import express from 'express'
import paymentRouter from './routes/payments'

const app = express()
const PORT = process.env.port || 4000

app.use('/api', paymentRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
