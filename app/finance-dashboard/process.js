export function calculateTotalIncome(transactions) {
    let totalIncome = 0
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].amount > 0) {
            totalIncome += transactions[i].amount
        }
    }
    return totalIncome
}
