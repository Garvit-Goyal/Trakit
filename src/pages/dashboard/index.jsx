import { useAddTransactions } from "../../hooks/useAddTransactions";

export const ExpenseTracker = () => {
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
                    <form className="add-transactions">
                        <input type="text" placeholder="Description" required />
                        <input type="number" placeholder="Amount" required />
                        <input type="radio" id="expense" value="expense" required />
                        <label htmlFor="expense">Expense</label>
                        <input type="radio" id="income" value="income" required />
                        <label htmlFor="expense">Income</label>

                        <button type="submit">Add Transaction</button>
                    </form>
                </div>
                <div className="transactions">
                    <p>Transactions</p>
                </div>
            </div>
        </>
    )
}