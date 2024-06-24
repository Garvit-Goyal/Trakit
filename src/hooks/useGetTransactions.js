import { useEffect, useState } from "react"
import { query, collection, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";
import { set } from "firebase/database";

export const useGetTransactions = () => {
    const [transactions, setTransactions] = useState([]);

    const transactionCollectionRef = collection(db, "transactions");
    const {userID} = useGetUserInfo();

    const getTransactions = async () =>{
        let unsubscribe;
        try {
            const queryTrasactions = query(transactionCollectionRef, where("userID", "==", userID), orderBy("createdAt"));

            unsubscribe = onSnapshot(queryTrasactions, (snapshot) =>{

                let docs = [];

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id

                    docs.push({...data, id})
                });

                setTransactions(docs);
            });

        } catch (err) {
            console.error(err);
        }

        return () => unsubscribe();
    }

    useEffect(() =>{
        getTransactions();
    })
    return {transactions}
}