export function calculateTotalIncome(transactions) {
    let totalIncome = 0
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].amount > 0) {
            totalIncome += transactions[i].amount
        }
    }
    return totalIncome
}

export function calculateTotalExpense(transactions) {
    let totalExpense = 0
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].amount < 0) {
            totalExpense += transactions[i].amount
        }
    }
    return totalExpense
}

/**
 * calculateIncomeByCategory calculates the total income by category
 * and return an array like below:
 *      [
 *         {category: "Salary", amount: 3000.00},
 *         {category: "Freelance", amount: 500.00},
 *         {category: "Investment", amount: 150.00},
 *         {category: "Other", amount: 50.00}
 *     ]
 */
export function calculateIncomeByCategory(transactions) {
    let incomeByCategory = new Map()
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].amount > 0) {
            if (!(transactions[i].category in incomeByCategory)) {
                incomeByCategory[transactions[i].category] = 0
            }
            incomeByCategory[transactions[i].category] += transactions[i].amount
        }
    }

    let incomeByCategoryArr = []
    for (let category in incomeByCategory) {
        incomeByCategoryArr.push({category: category, amount: incomeByCategory[category]})
    }
    return incomeByCategoryArr
}

export function calculateExpenseByCategory(transactions) {
    let expenseByCategory = new Map()
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].amount < 0) {
            if (!(transactions[i].category in expenseByCategory)) {
                expenseByCategory[transactions[i].category] = 0
            }
            expenseByCategory[transactions[i].category] += transactions[i].amount
        }
    }

    let expenseByCategoryArr = []
    for (let category in expenseByCategory) {
        expenseByCategoryArr.push({category: category, amount: Math.abs(expenseByCategory[category])})
    }
    return expenseByCategoryArr
}

