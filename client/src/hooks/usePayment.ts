import { useCallback, useEffect, useState } from "react"
import { getPayments } from "../api/services/payments"
import { getApiErrorMessage } from "../api/axiosInstance"
import { Payment } from "../types/services/payments"


export function usePayments(status: string) {
    const [payments, setPayments] = useState<Payment[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const loadPayments = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await getPayments(status)
            setPayments(data)
        } catch (err) {
            setError(getApiErrorMessage(err));
        } finally {
            setLoading(false)

        }
    }, [status])

    useEffect(() => {
        loadPayments()
    }, [loadPayments])

    return { payments, loading, error, reloadPayments: loadPayments }
}