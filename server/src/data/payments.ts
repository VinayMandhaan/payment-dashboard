import { Payment, PaymentStatusOptions } from "../models/payments";

export const paymentData: Payment[] = [
    {
        paymentId: 1,
        amount: 120,
        currency: 'AED',
        status: 'approved',
        createdAt: new Date('2026-07-01T09:14:00.000Z')
    },
    {
        paymentId: 2,
        amount: 50.99,
        currency: 'USD',
        status: 'rejected',
        createdAt: new Date('2026-07-01T09:14:00.000Z')
    },
    {
        paymentId: 3,
        amount: 200,
        currency: 'AED',
        status: 'rejected',
        createdAt: new Date('2026-07-01T09:14:00.000Z')
    },
    {
        paymentId: 4,
        amount: 100,
        currency: 'EUR',
        status: 'pending',
        createdAt: new Date('2026-07-01T09:14:00.000Z')
    },
    {
        paymentId: 5,
        amount: 25.50,
        currency: 'USD',
        status: 'rejected',
        createdAt: new Date('2026-07-01T09:14:00.000Z')
    },
    {
        paymentId: 6,
        amount: 160,
        currency: 'USD',
        status: 'pending',
        createdAt: new Date('2026-07-01T09:14:00.000Z')
    },
    {
        paymentId: 7,
        amount: 40,
        currency: 'EUR',
        status: 'approved',
        createdAt: new Date('2026-07-01T09:14:00.000Z')
    },
]


export const paymentStatusData : PaymentStatusOptions[] = [
    {
        id: 1,
        title: 'approved'
    },
    {
        id: 2,
        title: 'pending'
    },
    {
        id: 3,
        title: 'rejected'
    }
]