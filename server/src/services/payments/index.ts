import { paymentData, paymentStatusData } from "../../data/payments";
import { Payment, PaymentStatus, PaymentStatusOptions } from "../../models/payments";

const STATUS: PaymentStatus[] = ['approved', 'pending', 'rejected']

export function getPayments(status?: string): Payment[] {
    if (!status || status == 'all') {
        return paymentData
    }
    if (!STATUS.includes(status as PaymentStatus)) {
        throw new Error(`Invalid Status ${status}`)
    }
    return paymentData.filter((payment) => payment.status == status)
}


export function getPaymentStatusList(): PaymentStatusOptions[] {
    return paymentStatusData
}

