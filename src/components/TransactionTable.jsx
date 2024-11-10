import { useGetTransactions } from "../hooks/useGetTransactions";

export const TransactionTable = () => {
    const { transactions } = useGetTransactions();

    return (

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
    )
}