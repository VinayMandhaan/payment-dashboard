import { paymentData } from "../../data/payments";
import { Payment } from "../../models/payments";

export function getPayments(status?: string): Payment[] {
    if (!status || status == 'All') {
        return paymentData
    }
    return paymentData.filter((payment) => payment.status == status)
}