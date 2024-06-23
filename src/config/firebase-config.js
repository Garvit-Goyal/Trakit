// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcDYWOzbjd5Cos-Oqqhi_PXnH957g40CI",
  authDomain: "trakit-2fb89.firebaseapp.com",
  projectId: "trakit-2fb89",
  storageBucket: "trakit-2fb89.appspot.com",
  messagingSenderId: "319665084102",
  appId: "1:319665084102:web:ff5b0f0cb351d2b64ae9c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//firebase login
//firebase init
//firebase deploy