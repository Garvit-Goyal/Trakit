import {addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../config/firebase-config";

export const useAddTransactions = (description, transactionAmount, transactionType) => {
    const transactionCollectionRef = collection(db, "transactions");

    const addTransaction = async () => {
        await addDoc(transactionCollectionRef, {
            userID: "",
            description,
            transactionAmount,
            transactionType,
            createdAt: serverTimestamp(),
        });
    };
    return{addTransaction};
}