export type PaymentStatus = 'approved' | 'pending' | 'rejected'

export interface Payment {
    paymentId: number;
    amount: number;
    currency: string;
    status: PaymentStatus;
    createdAt: Date;
}

export interface PaymentStatusOptions {
    id: number;
    title: PaymentStatus
}