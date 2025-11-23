import Papa from 'papaparse';
import path from "path";
import fs from "fs";

const filePath = path.resolve('./vietnam_stock_market.csv');
const csvFile = fs.readFileSync(filePath, "utf8");
const csvData = Papa.parse(csvFile, {header: true, dynamicTyping: true})
console.log(csvData)

let stockMarketCapY24 = csvData.data[0]["2024"]
console.log(`Vietnam Stock Market Cap in 2024: ${stockMarketCapY24} billion VND`)