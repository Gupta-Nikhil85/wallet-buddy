import { ExpenditureCategories, SavingsCategories } from "../util";

export const chartHelper = (props)=> {
    const {title}= props;
    const transactions= JSON.parse(localStorage.getItem('TRANSACTIONS')) || [];
    const rightTransactions = transactions.filter((t) => t.type === title);
    const total = rightTransactions.reduce((acc, currVal) => acc += parseInt(currVal.Amount), 0);
    const categories = title === 'Savings' ? SavingsCategories : ExpenditureCategories;

    rightTransactions.forEach((t) => {
        const category = categories.find((c) => c.type === t.Source);
        if (category) {
            category.amount += parseInt(t.Amount);
        }
    });
    const filteredCategories = categories.filter((sc) => sc.amount > 0);

    const chartData = {
        labels: filteredCategories.map((c) => c.type),
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
        }],
    };
    return {chartData, total};
}