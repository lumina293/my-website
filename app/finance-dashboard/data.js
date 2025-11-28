import Papa from 'papaparse';
import path from "path";
import fs from "fs";

// LoadTransactions loads transaction data from transactions_6_months.csv
// and returns an array of transactions, e.g.,
// [
//    {
//       date: '2025-05-29',
//       category: 'Eating Out',
//       description: 'Cafe',
//       amount: -450575
//     },
//     {
//       date: '2025-05-29',
//       category: 'Groceries',
//       description: 'Vegetable market',
//       amount: -670792
//     }
// ]
export function LoadTransactions() {
    const filePath = path.resolve('./transactions_6_months.csv');
    const csvString = fs.readFileSync(filePath, "utf8");
    const csvData = Papa.parse(csvString, {header: true, dynamicTyping: true})
    return csvData.data
}
