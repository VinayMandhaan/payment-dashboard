import { Request, Response, Router } from "express";
import { getPayments } from "../../services/payments";

const router = Router()

router.get('/payments', (req: Request, res: Response) => {
    try {
        const paymentStatus = typeof req.query.status == 'string' ? req.query.status : undefined
        return res.json(getPayments(paymentStatus))
    } catch (err) {
        const error = err?.message ? err?.message : 'Something went wrong'
        return res.status(500).json({ error })
    }
}) 


export default router