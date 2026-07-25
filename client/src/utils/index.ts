export function formatAmount(amount: number, currency: string): string {
    return `${amount} ${currency}`
}

export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString(undefined, {
        year: 'numeric',
        month:'short',
        day:'numeric'
    })
}