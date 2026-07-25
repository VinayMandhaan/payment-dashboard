import { useState } from "react"
import PaymentsTables from "../../components/Payments/PaymentsTables"
import Loader from "../../components/Generics/Loader";
import ErrorMessage from "../../components/Generics/ErrorMessage";
import Button from "../../components/Generics/Button";
import { getApiErrorMessage } from "../../api/axiosInstance";
import FilterChips from "../../components/Generics/FilterChips";
import { usePayments } from "../../hooks/usePayment";
import { usePaymentStatus } from "../../hooks/usePaymentStatus";

const Payments = () => {
    const [status, setStatus] = useState('all')
    const { payments, loading: paymentLoading, error: paymentError, reloadPayments } = usePayments(status)
    const { statusList, loading: statusLoading, error: statusError, reloadStatusList } = usePaymentStatus()


    const retryData = () => {
        if (paymentError) reloadPayments()
        if (statusError) reloadStatusList()
    }

    return (
        <div className="page">
            <h1>Payment Dashboard</h1>
            {
                statusLoading ? <></> : statusError ? <ErrorMessage message={statusError ?? 'Something went wrong'} /> : (
                    <FilterChips
                        options={['all', ...statusList.map((s) => s.title)]}
                        value={status}
                        onChange={setStatus} />
                )
            }

            {
                paymentLoading ? (
                    <Loader />
                ) : paymentError ? (
                    <div className="status">
                        <ErrorMessage message={paymentError ?? 'Something went wrong'} />
                        <Button title="Retry" onClick={() => {
                            retryData()
                        }} />
                    </div>
                ) : (
                    <div>
                        <PaymentsTables payments={payments} />
                    </div>
                )
            }
        </div>
    )
}


export default Payments