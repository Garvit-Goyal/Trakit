import { useState } from "react";
import { useAddTransactions } from "../../hooks/useAddTransactions";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

import "./style.css"
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";

export const ExpenseTracker = () => {
    const {addTransaction} = useAddTransactions();
    const {transactions, transactionTotals} = useGetTransactions();
    const {name, profilePhoto} = useGetUserInfo();

    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState("expense");

    const{balance, income, expenses} = transactionTotals;

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
        <>
            <div className="expense-tracker">
                <div className="container">
                    <h1>{name}, Karega Expense Track?</h1>
                    <div className="balance">
                        <h2>Your Balance</h2>
                        <h3>${balance}</h3>
                    </div>
                    <div className="summary">
                        <div className="income">
                            <h2>Your Income</h2>
                            <h3>${income}</h3>
                        </div>
                        <div className="expenses">
                            <h2>Your Expenses</h2>
                            <h3>${expenses}</h3>
                        </div>
                    </div>
                    <form className="add-transactions" onSubmit={onSubmit}>
                        <input type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
                        <input type="number" value={transactionAmount} placeholder="Amount" onChange={(e) => setTransactionAmount(e.target.value)} required />
                        <input type="radio" id="expense" value="expense" checked = {transactionType==="expense"} onChange={(e) => setTransactionType(e.target.value)} required />
                        <label htmlFor="expense">Expense</label>
                        <input type="radio" id="income" value="income" checked = {transactionType==="income"} onChange={(e) => setTransactionType(e.target.value)} required />
                        <label htmlFor="income">Income</label>

                        <button type="submit">Add Transaction</button>
                    </form>
                </div>
                {profilePhoto && <div className="profile"><img src={profilePhoto}/></div>}
                <button className="signOut" onClick={userSignOut}>
                    Sign Out
                </button>
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