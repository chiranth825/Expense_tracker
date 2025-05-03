export const calculateTotal = (expenses) =>
    expenses.reduce((sum, { amount}) => sum + amount, 0);

export const printExpenses = (expenses) => {
    console.log("\n Expense List:");
    expenses.forEach(({description, amount}) => 
    console.log(`-${description}: ₹${amount}`))
};
}