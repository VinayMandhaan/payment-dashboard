export interface Payment {
    paymentId: number;
    amount: number;
    currency: string;
    status: string;
    createdAt: Date;
}
