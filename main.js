import { addExpense, getAllExpenses } from './data.js';
import { calculateTotal, printExpenses } from './utils.js';

// Add some expenses
addExpense({ description: "Groceries", amount: 250 });
addExpense({ description: "Electricity Bill", amount: 800 });
addExpense({ description: "Coffee", amount: 120 });

// Get all expenses
const expenses = getAllExpenses();

// Print list and total
printExpenses(expenses);
console.log("\n💰 Total Spent: ₹" + calculateTotal(expenses));
