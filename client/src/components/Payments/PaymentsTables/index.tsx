import { Payment } from "../../../types/services/payments"
import { Column } from "../../../types/ui/tables"
import { formatAmount, formatDate } from "../../../utils"
import Tables from "../../Generics/Tables"

interface PaymentTableProps {
    payments: Payment[]
}

const paymentColumns: Column<Payment>[] = [
    {
        header: 'Payment ID',
        render: (p) => p.paymentId
    },
    {
        header: 'Amount',
        render: (p) => formatAmount(p.amount, p.currency)
    },
    {
        header: 'Status',
        render: (p) => <span className={`badge badge-${p.status?.toLowerCase()}`}>{p.status?.toLocaleUpperCase()}</span>
    },
    {
        header:'Created at',
        render: (p) => formatDate(p.createdAt.toString())
    }

]

function PaymentsTables({payments}: PaymentTableProps) {
    if(payments.length === 0) {
        return <p>No Payments Found</p>
    }
    return (
        <Tables columns={paymentColumns} data={payments}/>
    )
}

export default PaymentsTables