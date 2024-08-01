import { useState } from "react";
import { useAddTransactions } from "../../hooks/useAddTransactions";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

import "./style.css"
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";

export const ExpenseTracker = () => {
    const { addTransaction } = useAddTransactions();
    const { transactions, transactionTotals } = useGetTransactions();
    const { name, profilePhoto } = useGetUserInfo();

    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expense");

    const { balance, income, expenses } = transactionTotals;

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            description,
            transactionAmount,
            transactionType,
        });

        setDescription("");
        setTransactionAmount("");
    }

    const userSignOut = async () => {
        await signOut(auth);
        localStorage.clear();
        navigate("/")
    }
    return (
        <div className="page">
            <div className="expense-tracker">
                <div className="expense-card">
                    <div className="container">
                        <h1>Welcome,{name}!</h1>
                        <div className="balance">
                            <p>Balance</p>
                            <p>Rs.&nbsp;&nbsp;{balance}</p>
                        </div>
                        <div className="income">
                            <p>Income</p>
                            <p>Rs.&nbsp;&nbsp;{income}</p>
                        </div>
                        <div className="expenses">
                            <p>Expenses</p>
                            <p>Rs.&nbsp;&nbsp;{expenses}</p>
                        </div>
                        <form className="add-transactions" onSubmit={onSubmit}>
                            <h2>Add a Transaction:</h2>
                            <div className="input1">
                                <div className="descInput">
                                    <p>Description: </p>
                                    <input type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
                                </div>
                                <div className="amountInput">
                                    <p>Amount: </p>
                                    <input type="number" value={transactionAmount} placeholder="Amount" onChange={(e) => setTransactionAmount(e.target.value)} required />
                                </div>
                            </div>
                            <label htmlFor="expense"><input type="radio" id="expense" value="expense" checked={transactionType === "expense"} onChange={(e) => setTransactionType(e.target.value)} required />&nbsp; Expense</label>
                            <input type="radio" id="income" value="income" checked={transactionType === "income"} onChange={(e) => setTransactionType(e.target.value)} required /><label htmlFor="income">&nbsp; Income</label>
                            <div>
                                <button className="submit-transaction" type="submit">Add Transaction</button>
                            </div>
                        </form>
                        <div className="transactions">
                            <p>Recent Transactions :</p>
                            <ul>
                                {transactions.map((transaction) => {
                                    const { description, transactionAmount, transactionType } = transaction;
                                    return (
                                        <li>
                                            <h4>{description}</h4>
                                            <p>Rs. {transactionAmount} : <label>{transactionType}</label></p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    {/* <div className="profile"><img src={profilePhoto}/></div> */}
                    <button className="signOut" onClick={userSignOut}>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    )
}