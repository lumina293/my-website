"use client"

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis, Bar
} from "recharts"
import FinanceDashboardHeader from '@/components/FinanceDashboardHeader';
import {
    calculateTotalIncome,
    calculateTotalExpense,
    calculateIncomeByCategory,
    calculateExpenseByCategory,
    calculateExpenseByDate
} from '@/app/projects/finance-dashboard/process';
import {LoadTransactions} from "@/app/projects/finance-dashboard/data";

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
    let transactions = LoadTransactions()

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
                        <tr key={transaction.date + transaction.category + transaction.description + transaction.amount}
                            className="hover:bg-gray-50">
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
                                {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
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
    let totalIncome = calculateTotalIncome(LoadTransactions())
    let totalExpense = calculateTotalExpense(LoadTransactions())
    let netBalance = totalIncome + totalExpense
    return (
        <div className="space-y-6">
            {/* Summary Cards Section */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Summary
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SummaryCard title="Total Income" value={totalIncome}/>
                    <SummaryCard title="Total Expenses" value={totalExpense}/>
                    <SummaryCard title="Net Balance" value={netBalance}/>
                </div>
            </section>

            <CategoryBreakdownCharts/>
            <ExpensesByDay/>
        </div>
    );
}

function SummaryCard({title, value}) {
    let isPositive = value >= 0
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-xs font-medium text-gray-600 mb-1">
                {title}
            </h3>
            <p className={`text-2xl font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {isPositive ? '+' : '-'}{Math.abs(value).toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND'
            })}
            </p>
        </div>
    );
}

function CategoryBreakdownCharts() {
    let transactions = LoadTransactions()
    let incomeByCategory = calculateIncomeByCategory(transactions)
    let expenseByCategory = calculateExpenseByCategory(transactions)

    return (
        <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Category Breakdown
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CategoryPieChart
                    title="Income by Category"
                    data={incomeByCategory}
                    isIncome={true}
                />
                <CategoryPieChart
                    title="Expense by Category"
                    data={expenseByCategory}
                    isIncome={false}
                />
            </div>
        </section>
    );
}

function CategoryPieChart({title, data, isIncome}) {
    // Color palettes
    const incomeColors = ['#10b981', '#3b82f6', '#8b5cf6', '#6366f1'];
    const expenseColors = ['#ef4444', '#f59e0b', '#ec4899', '#f97316', '#eab308', '#14b8a6'];
    const colors = isIncome ? incomeColors : expenseColors;

    // Calculate total
    let total = data.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-4">
                {title}
            </h3>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="amount"
                            nameKey="category"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label={(entry) => `${entry.category} (${((entry.amount / total) * 100).toFixed(1)}%)`}
                            labelLine={true}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value) => `$${value.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}`}
                            contentStyle={{
                                backgroundColor: 'white',
                                border: '1px solid #e5e7eb',
                                borderRadius: '6px',
                                fontSize: '12px'
                            }}
                        />
                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            wrapperStyle={{fontSize: '12px'}}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}


function ExpensesByDay() {
    let expensesByDay = calculateExpenseByDate(LoadTransactions())
    let expenseByLast30Days = expensesByDay.slice(expensesByDay.length - 30, expensesByDay.length)
    return (
        <div className="container mx-auto px-4 py-8">
            <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Expenses by date
                </h2>
                <BarChartCard
                    title="How much I spend each day in the last 30 days"
                    data={expenseByLast30Days}
                />
            </section>
        </div>
    );
}

function BarChartCard({title, data}) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-4">
                {title}
            </h3>
            <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{top: 5, right: 10, left: 10, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"/>
                        <XAxis
                            dataKey="date"
                            tick={{fill: '#6b7280', fontSize: 11}}
                            angle={-45}
                            textAnchor="end"
                            height={80}
                        />
                        <YAxis tick={{fill: '#6b7280', fontSize: 11}}/>
                        <Tooltip
                            formatter={(value) => value.toLocaleString()}
                            contentStyle={{
                                backgroundColor: 'white',
                                border: '1px solid #e5e7eb',
                                borderRadius: '6px',
                                fontSize: '12px'
                            }}
                        />
                        <Bar
                            dataKey="amount"
                            fill="#3b82f6"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
