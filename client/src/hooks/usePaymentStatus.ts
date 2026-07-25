import { use, useCallback, useEffect, useState } from "react"
import { getApiErrorMessage } from "../api/axiosInstance"
import { getPaymentStatusList } from "../api/services/payments"
import { PaymentStatusOptions } from "../types/services/payments"


export function usePaymentStatus() {
    const [statusList, setStatusList] = useState<PaymentStatusOptions[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const loadPaymentStatusList = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await getPaymentStatusList()
            setStatusList(data)
        } catch (err) {
            setError(getApiErrorMessage(err));
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        loadPaymentStatusList()
    }, [loadPaymentStatusList])

    return { statusList, loading, error, reloadStatusList: loadPaymentStatusList }

}