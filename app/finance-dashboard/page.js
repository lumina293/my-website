// file: app/finance-dashboard/page.js
import FinanceDashboardHeader from '@/components/FinanceDashboardHeader';

export default function FinanceDashboard() {
    return (
        <main>
            <FinanceDashboardHeader/>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Sidebar - Transaction Table (1/3) */}
                    <div className="w-full lg:w-1/3">
                        <TransactionTable/>
                    </div>

                    {/* Right Content - Cards & Charts (2/3) */}
                    <div className="w-full lg:w-2/3">
                        <DashboardContent/>
                    </div>
                </div>
            </div>
        </main>
    )
}

function TransactionTable() {
    // Stub transaction data
    let transactions = [
        {id: 1, date: "2024-01-15", category: "Groceries", amount: -45.50, description: "Supermarket"},
        {id: 2, date: "2024-01-14", category: "Salary", amount: 3000.00, description: "Monthly Salary"},
        {id: 3, date: "2024-01-13", category: "Transport", amount: -12.00, description: "Taxi"},
        {id: 4, date: "2024-01-12", category: "Dining", amount: -28.75, description: "Restaurant"},
        {id: 5, date: "2024-01-11", category: "Shopping", amount: -89.99, description: "Clothing"},
        {id: 6, date: "2024-01-10", category: "Bills", amount: -150.00, description: "Electricity"},
        {id: 7, date: "2024-01-09", category: "Entertainment", amount: -25.00, description: "Movie tickets"},
        {id: 8, date: "2024-01-08", category: "Groceries", amount: -62.30, description: "Supermarket"},
    ];

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
                <h2 className="text-xl font-semibold text-gray-900">
                    Transactions
                </h2>
            </div>
            <div className="overflow-auto max-h-[800px]">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 sticky top-0">
                    <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Category</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 uppercase">Amount</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-gray-900">{transaction.date}</td>
                            <td className="px-4 py-3">
                                <div>
                                    <p className="font-medium text-gray-900">{transaction.category}</p>
                                    <p className="text-xs text-gray-500">{transaction.description}</p>
                                </div>
                            </td>
                            <td className={`px-4 py-3 text-right font-medium ${
                                transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                                {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            })}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function DashboardContent() {
    return (
        <div className="space-y-6">
            {/* Summary Cards Section */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Summary
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SummaryCard title="Total Income" value={3000.00} isPositive={true} />
                    <SummaryCard title="Total Expenses" value={413.54} isPositive={false} />
                    <SummaryCard title="Net Balance" value={2586.46} isPositive={true} />
                </div>
            </section>

            {/* Placeholder for Charts */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Spending by Category
                </h2>
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="h-[300px] flex items-center justify-center text-gray-400">
                        Chart placeholder - Will add your charts here
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Trends
                </h2>
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="h-[300px] flex items-center justify-center text-gray-400">
                        Chart placeholder - Will add your charts here
                    </div>
                </div>
            </section>
        </div>
    );
}

function SummaryCard({title, value, isPositive}) {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-xs font-medium text-gray-600 mb-1">
                {title}
            </h3>
            <p className={`text-2xl font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {isPositive ? '+' : '-'}${Math.abs(value).toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}
            </p>
        </div>
    );
}
