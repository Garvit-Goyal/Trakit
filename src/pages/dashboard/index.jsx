import { useState } from "react";
import { useAddTransactions } from "../../hooks/useAddTransactions";
import { useGetTransactions } from "../../hooks/useGetTransactions";

export const ExpenseTracker = () => {
    const {addTransaction} = useAddTransactions();
    const {transactions} = useGetTransactions();

    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expense");

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            description,
            transactionAmount,
            transactionType,
        });
    }
    return (
        <>
            <div className="expense-tracker">
                <div className="container">
                    <h1>Chutiye Karega Expense Track?</h1>
                    <div className="balance">
                        <h2>Your Balance</h2>
                        <h3>1000</h3>
                    </div>
                    <div className="summary">
                        <div className="income">
                            <h2>Your Income</h2>
                            <h3>10000</h3>
                        </div>
                        <div className="expenses">
                            <h2>Your Expenses</h2>
                            <h3>15000</h3>
                        </div>
                    </div>
                    <form className="add-transactions" onSubmit={onSubmit}>
                        <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
                        <input type="number" placeholder="Amount" onChange={(e) => setTransactionAmount(e.target.value)} required />
                        <input type="radio" id="expense" value="expense" checked = {transactionType==="expense"} onChange={(e) => setTransactionType(e.target.value)} required />
                        <label htmlFor="expense">Expense</label>
                        <input type="radio" id="income" value="income" checked = {transactionType==="income"} onChange={(e) => setTransactionType(e.target.value)} required />
                        <label htmlFor="income">Income</label>

                        <button type="submit">Add Transaction</button>
                    </form>
                </div>
                <div className="transactions">
                    <p>Transactions</p>
                    <ul>
                        {transactions.map((transaction) =>{
                            const {description, transactionAmount, transactionType} = transaction;
                            return (
                                <li>
                                    <h4>{description}</h4>
                                    <p>Rupees {transactionAmount} : <label>{transactionType}</label></p>

                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}