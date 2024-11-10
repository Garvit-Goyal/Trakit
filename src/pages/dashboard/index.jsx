import { Summary } from "../../components/Summary";
import { AddTransaction } from "../../components/AddTransaction";
import { TransactionTable } from "../../components/TransactionTable";


import { useGetUserInfo } from "../../hooks/useGetUserInfo";

import "./style.css"
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";




export const ExpenseTracker = () => {
    const { name } = useGetUserInfo();

    const navigate = useNavigate();

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
                        <Summary/>
                        <AddTransaction/>
                        <TransactionTable/>
                    </div>
                    <button className="signOut" onClick={userSignOut}>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    )
}