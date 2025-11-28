// javascript
const fs = require('fs');
const path = require('path');

const outPath = path.join(__dirname, 'transactions_6_months.csv');

const categories = [
    {name: 'Salary', type: 'income', desc: ['Monthly salary'], min: 10000000, max: 40000000},
    {name: 'Freelance', type: 'income', desc: ['Project payment', 'Client payment'], min: 1000000, max: 15000000},
    {name: 'Interest', type: 'income', desc: ['Bank interest'], min: 50000, max: 2000000},
    {name: 'Gift', type: 'income', desc: ['Gift from family', 'Birthday gift'], min: 100000, max: 3000000},

    {name: 'Groceries', type: 'expense', desc: ['Supermarket', 'Vegetable market'], min: 50000, max: 1500000},
    {name: 'Eating Out', type: 'expense', desc: ['Cafe', 'Restaurant', 'Street food'], min: 30000, max: 800000},
    {name: 'Transport', type: 'expense', desc: ['Taxi', 'Gas', 'Public transport'], min: 10000, max: 500000},
    {name: 'Rent', type: 'expense', desc: ['Apartment rent'], min: 2000000, max: 15000000},
    {
        name: 'Utilities',
        type: 'expense',
        desc: ['Electricity bill', 'Water bill', 'Internet'],
        min: 100000,
        max: 2000000
    },
    {name: 'Shopping', type: 'expense', desc: ['Clothes', 'Electronics', 'Home items'], min: 100000, max: 5000000},
    {name: 'Health', type: 'expense', desc: ['Pharmacy', 'Doctor appointment'], min: 50000, max: 2000000},
    {name: 'Entertainment', type: 'expense', desc: ['Movie', 'Concert', 'Streaming'], min: 20000, max: 1000000},
    {name: 'Loan Payment', type: 'expense', desc: ['Loan repayment'], min: 500000, max: 10000000},
    {name: 'Misc', type: 'expense', desc: ['Miscellaneous'], min: 10000, max: 500000}
];

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choose(arr) {
    return arr[randInt(0, arr.length - 1)];
}

function formatDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}

// last 6 months range: from 6 months ago +1 day to today (inclusive)
const today = new Date();
const start = new Date(today);
start.setMonth(start.getMonth() - 6);
start.setDate(start.getDate() + 1);

let rows = [];
rows.push(['date', 'category', 'description', 'amount'].join(','));

for (let d = new Date(start); d <= today; d.setDate(d.getDate() + 1)) {
    // choose 1..10 transactions for this day
    const count = randInt(1, 10);

    for (let i = 0; i < count; i++) {
        // bias: on the 25th of each month include Salary (income)
        let cat;
        if (d.getDate() === 25 && Math.random() < 0.6) {
            cat = categories.find(c => c.name === 'Salary');
        } else if (Math.random() < 0.12) {
            // occasional income
            cat = choose(categories.filter(c => c.type === 'income'));
        } else {
            cat = choose(categories.filter(c => c.type === 'expense'));
        }

        const desc = choose(cat.desc);
        const amountBase = randInt(cat.min, cat.max);
        const amount = cat.type === 'income' ? amountBase : -amountBase;

        // ensure description doesn't contain commas; if it does, quote it
        const safeDesc = desc.includes(',') ? `"${desc.replace(/"/g, '""')}"` : desc;

        rows.push([formatDate(new Date(d)), cat.name, safeDesc, amount].join(','));
    }
}

// ensure directory exists
const dir = path.dirname(outPath);
fs.mkdirSync(dir, {recursive: true});
fs.writeFileSync(outPath, rows.join('\n'), 'utf8');

console.log('Mock transactions written to', outPath);
