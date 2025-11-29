"use client"

// file: app/projects/investment-portfolio/page.js
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts"
import Header from "@/components/Header";

export default function InvestmentPortfolio() {
    return (
        <main>
            <Header title="Investment Portfolio" subtitle="Track your investment performance and asset allocation"/>
            <PortfolioSummaryCards/>
            <PortfolioBreakdownChart/>
            <PerformanceTrendsChart/>
        </main>
    )
}

function PortfolioSummaryCards() {
    // Mock portfolio summary data
    let totalValue = 100000;
    let costBasis = 85000;
    let totalGainLoss = totalValue - costBasis;
    let returnPercentage = ((totalGainLoss / costBasis) * 100).toFixed(2);

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Portfolio Summary
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SummaryCard
                        title="Total Value"
                        value={`$${totalValue.toLocaleString()}`}
                        valueColor="text-gray-900"
                    />
                    <SummaryCard
                        title="Total Gain/Loss"
                        value={`${totalGainLoss >= 0 ? '+' : ''}$${totalGainLoss.toLocaleString()}`}
                        valueColor={totalGainLoss >= 0 ? "text-green-600" : "text-red-600"}
                    />
                    <SummaryCard
                        title="Return"
                        value={`${returnPercentage >= 0 ? '+' : ''}${returnPercentage}%`}
                        valueColor={returnPercentage >= 0 ? "text-green-600" : "text-red-600"}
                    />
                </div>
            </section>
        </div>
    );
}

function SummaryCard({title, value, valueColor}) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xs font-medium text-gray-600 mb-2">
                {title}
            </h3>
            <p className={`text-3xl font-bold ${valueColor}`}>
                {value}
            </p>
        </div>
    );
}

function PortfolioBreakdownChart() {
    // Mock portfolio breakdown by category
    let portfolioByCategory = [
        {category: "Stocks", value: 45000, allocation: 45},
        {category: "Real Estate", value: 25000, allocation: 25},
        {category: "Bonds", value: 15000, allocation: 15},
        {category: "Crypto", value: 10000, allocation: 10},
        {category: "Cash", value: 5000, allocation: 5}
    ];

    const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#6b7280'];

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Portfolio Breakdown
                </h2>
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={portfolioByCategory}
                                    dataKey="value"
                                    nameKey="category"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    label={(entry) => `${entry.category} (${entry.allocation}%)`}
                                    labelLine={true}
                                >
                                    {portfolioByCategory.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(value) => `$${value.toLocaleString()}`}
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
                                    wrapperStyle={{ fontSize: '12px' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-6 pt-6 border-t">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {portfolioByCategory.map((item, index) => (
                                <div key={index} className="text-center">
                                    <div
                                        className="w-4 h-4 rounded-full mx-auto mb-2"
                                        style={{ backgroundColor: COLORS[index] }}
                                    />
                                    <p className="text-xs text-gray-600">{item.category}</p>
                                    <p className="text-sm font-semibold text-gray-900">
                                        ${item.value.toLocaleString()}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function PerformanceTrendsChart() {
    // Mock 12-month performance data
    let performanceData = [
        {month: "Jan", stocks: 40000, realEstate: 22000, bonds: 14000, crypto: 8000, cash: 5000},
        {month: "Feb", stocks: 41000, realEstate: 22500, bonds: 14200, crypto: 8500, cash: 5000},
        {month: "Mar", stocks: 39500, realEstate: 23000, bonds: 14500, crypto: 7500, cash: 5000},
        {month: "Apr", stocks: 42000, realEstate: 23500, bonds: 14800, crypto: 9000, cash: 5000},
        {month: "May", stocks: 43000, realEstate: 24000, bonds: 15000, crypto: 9500, cash: 5000},
        {month: "Jun", stocks: 42500, realEstate: 24200, bonds: 15100, crypto: 9200, cash: 5000},
        {month: "Jul", stocks: 44000, realEstate: 24500, bonds: 15200, crypto: 10000, cash: 5000},
        {month: "Aug", stocks: 43500, realEstate: 24800, bonds: 15300, crypto: 9800, cash: 5000},
        {month: "Sep", stocks: 44500, realEstate: 25000, bonds: 15400, crypto: 10500, cash: 5000},
        {month: "Oct", stocks: 45500, realEstate: 25200, bonds: 15600, crypto: 10200, cash: 5000},
        {month: "Nov", stocks: 45000, realEstate: 25000, bonds: 15000, crypto: 10000, cash: 5000},
        {month: "Dec", stocks: 45000, realEstate: 25000, bonds: 15000, crypto: 10000, cash: 5000}
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    12-Month Performance
                </h2>
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={performanceData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis
                                    dataKey="month"
                                    tick={{ fill: '#6b7280', fontSize: 11 }}
                                />
                                <YAxis
                                    tick={{ fill: '#6b7280', fontSize: 11 }}
                                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                                />
                                <Tooltip
                                    formatter={(value) => `$${value.toLocaleString()}`}
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '6px',
                                        fontSize: '12px'
                                    }}
                                />
                                <Legend
                                    wrapperStyle={{ fontSize: '12px' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="stocks"
                                    stroke="#3b82f6"
                                    strokeWidth={2}
                                    name="Stocks"
                                    dot={false}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="realEstate"
                                    stroke="#10b981"
                                    strokeWidth={2}
                                    name="Real Estate"
                                    dot={false}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="bonds"
                                    stroke="#f59e0b"
                                    strokeWidth={2}
                                    name="Bonds"
                                    dot={false}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="crypto"
                                    stroke="#8b5cf6"
                                    strokeWidth={2}
                                    name="Crypto"
                                    dot={false}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="cash"
                                    stroke="#6b7280"
                                    strokeWidth={2}
                                    name="Cash"
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>
        </div>
    );
}
