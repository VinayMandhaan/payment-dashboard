import { useCallback, useEffect, useState } from "react"
import { getPayments, getPaymentStatusList } from "../../api/services/payments"
import { Payment, PaymentStatusOptions } from "../../types/services/payments"
import PaymentsTables from "../../components/Payments/PaymentsTables"
import Loader from "../../components/Generics/Loader";
import ErrorMessage from "../../components/Generics/ErrorMessage";
import Button from "../../components/Generics/Button";
import { getApiErrorMessage } from "../../api/axiosInstance";

const Payments = () => {
    const [payments, setPayments] = useState<Payment[]>([])
    const [status, setStatus] = useState('all')
    const [statusList, setStatusList] = useState<PaymentStatusOptions[]>([])
    const [loading, setLoading] = useState({
        payments: false,
        status: false
    })
    const [error, setError] = useState<{ payments: string | null; status: string | null }>({
        payments: null,
        status: null,
    });

    const loadPayments = useCallback(async () => {
        setLoading((prev) => ({ ...prev, payments: true }))
        setError((prev) => ({ ...prev, payments: null }))
        try {
            const data = await getPayments(status)
            setPayments(data)
        } catch (err) {
            setError((prev) => ({ ...prev, status: getApiErrorMessage(err) }));
        } finally {
            setLoading((prev) => ({ ...prev, payments: false }))

        }
    }, [status])

    const loadPaymentStatusList = useCallback(async () => {
        setLoading((prev) => ({ ...prev, status: true }))
        setError((prev) => ({ ...prev, status: null }))
        try {
            const data = await getPaymentStatusList()
            setStatusList(data)
        } catch (err) {
            setError((prev) => ({ ...prev, status: getApiErrorMessage(err) }));
        } finally {
            setLoading((prev) => ({ ...prev, status: false }))
        }
    }, [])

    const retryData = () => {
        if (error?.payments) {
            loadPayments()
        } else {
            loadPaymentStatusList()
        }
    }

    useEffect(() => {
        loadPaymentStatusList()
    }, [])

    useEffect(() => {
        loadPayments()
    }, [loadPayments])


    return (
        <div className="page">
            <h1>Payments</h1>
            <select value={status} onChange={(e) => {
                setStatus(e.target.value)
            }} >
                <option value="all">ALL</option>
                {

                    statusList && statusList.map((status, index) => (
                        <option key={status.id} value={status.title}>
                            {status.title?.toLocaleUpperCase()}
                        </option>
                    ))
                }

            </select>
            {
                loading?.payments ? (
                    <Loader />
                ) : (

                    <div>

                        <PaymentsTables payments={payments} />

                    </div>
                )
            }
            {
                (error.payments || error.status) && (
                    <div className="status">
                        <ErrorMessage message={error.payments ? error.payments : error.status ? error.status : 'Something went wrong'} />
                        <Button title="Retry" onClick={() => {
                            retryData()
                        }} />
                    </div>
                )
            }
        </div>
    )
}


export default Payments