import { Payment } from "../../../types/services/payments"
import { Column } from "../../../types/ui/tables"
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
        render: (p) => p.amount
    }
]

function PaymentsTables({payments}: PaymentTableProps) {
    return (
        <Tables columns={paymentColumns} data={payments}/>
    )
}

export default PaymentsTables