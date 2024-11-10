import { auth, provider } from "../../config/firebase-config"
import { signInWithPopup } from "firebase/auth"
import { useNavigate, Navigate } from "react-router-dom"

import { FaUser, FaLock } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

import "./style.css"
import logo from "../../assets/budget.png"


export const Auth = () => {

    const navigate = useNavigate();

    const signInGoogle = async () => {
        const results = await signInWithPopup(auth, provider);
        //For keeping the user signed in even after refresh (local storage here but cookies is better).
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true,
        };
        localStorage.setItem("auth", JSON.stringify(authInfo)) //Local storage takes only string not objects so converting to string.
        navigate("/expense-tracker");
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <form action="">
                    <img src={logo} className="logo"/>
                    <h1>Login to TrakIt</h1>
                </form>
                <div className="signInWithGoogle">
                    <button className="login-with-google-button" onClick={signInGoogle}>&emsp; Sign in with Google</button>
                    <FcGoogle className="color-google-icon" />
                </div>
                <div className="github">
                    <p><a href="https://github.com/Garvit-Goyal/Trakit">GitHub Repository</a></p>
                </div>
            </div>
        </div>
    )
}