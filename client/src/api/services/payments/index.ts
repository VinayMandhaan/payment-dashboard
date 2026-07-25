import { Payment, PaymentStatusOptions } from "../../../types/services/payments";
import { apiClient } from "../../axiosInstance";

export async function getPayments(status: string = 'All'): Promise<Payment[]> {
    const params = status && status !== 'all' ? { status } : undefined
    const response = await apiClient.get<Payment[]>('/payments', { params })
    return response.data
}

export async function getPaymentStatusList(): Promise<PaymentStatusOptions[]> {
    const response = await apiClient.get<PaymentStatusOptions[]>('/status-list')
    return response.data
}