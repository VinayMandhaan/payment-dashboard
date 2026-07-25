import { useEffect, useState } from "react"
import { getPayments } from "../../api/services/payments"
import { Payment } from "../../types/services/payments"
import PaymentsTables from "../../components/Payments/PaymentsTables"


const Payments = () => {
    const [payments, setPayments] = useState<Payment[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const loadData = async () => {
        setLoading(true)
        setError(false)
        try {
            const data = await getPayments()
            setPayments(data)
        } catch (err) {
            console.log(err)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData()
    },[])

    return (
        <div>
            <h1>Payments</h1>
            <PaymentsTables payments={payments}/>
        </div>
    )
}


export default Payments