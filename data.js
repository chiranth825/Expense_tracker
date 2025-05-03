let expenses = [];

export const addExpense = ({ description, amount}) => {
    expenses = [...expenses, { description, amount}];
    console.log(`✅ Added: ${description} - ₹${amount}`);
};

export const getAllExpenses = () => expenses;