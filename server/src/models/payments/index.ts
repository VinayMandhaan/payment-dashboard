export type PaymentStatus = 'Approved' | 'Pending' | 'Rejected'

export interface Payment {
    paymentId: number;
    amount: number;
    currency: string;
    status: PaymentStatus;
    createdAt: Date;
}
