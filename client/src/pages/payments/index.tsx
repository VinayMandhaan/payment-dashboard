import { useEffect, useState } from "react"
import { getPayments } from "../../api/services/payments"
import { Payment } from "../../types/services/payments"
import PaymentsTables from "../../components/Payments/PaymentsTables"
import Loader from "../../components/Generics/Loader";
import ErrorMessage from "../../components/Generics/ErrorMessage";
import Button from "../../components/Generics/Button";

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
    }, [])

    return (
        <div className="page">
            <h1>Payments</h1>
            {
                loading ? (
                    <Loader />
                ) : (
                    <PaymentsTables payments={payments} />
                )
            }
            {
                !loading && error && (
                    <div className="status">
                        <ErrorMessage message="Something went wrong" />
                        <Button title="Retry" onClick={() => {
                            loadData()
                        }} />
                    </div>
                )
            }
        </div>
    )
}


export default Payments