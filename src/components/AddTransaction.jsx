import { useState } from "react";
import { useAddTransactions } from "../hooks/useAddTransactions";

export const AddTransaction = () => {
    const { addTransaction } = useAddTransactions();

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

        setDescription("");
        setTransactionAmount("");
    }

    return(
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
    )
}