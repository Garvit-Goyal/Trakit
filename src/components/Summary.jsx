import { useGetTransactions } from "../hooks/useGetTransactions";

export const Summary = () => {
    const { transactions, transactionTotals } = useGetTransactions();

    const { balance, income, expenses } = transactionTotals;

    return (
        <div className="summary-card">
            <div className="balance">
                <p>Balance</p>
                <p>Rs.&nbsp;&nbsp;&nbsp;{balance}</p>
            </div>
            <div className="income">
                <p>Income</p>
                <p>Rs.&nbsp;&nbsp;{income}</p>
            </div>
            <div className="expenses">
                <p>Expenses</p>
                <p>Rs.&nbsp;&nbsp;{expenses}</p>
            </div>
        </div>
    )
}