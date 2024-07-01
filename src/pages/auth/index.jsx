import {auth, provider} from "../../config/firebase-config"
import {signInWithPopup} from "firebase/auth"
import {useNavigate, Navigate} from "react-router-dom"
import { useGetUserInfo } from "../../hooks/useGetUserInfo"

export const Auth = () => {

    const navigate = useNavigate();
    const {isAuth} = useGetUserInfo();

    const signInWithGoogle = async () =>{
        const results = await signInWithPopup(auth, provider);
        //For keeping the user signed in even after refresh (local storage here but cookies is better).
        const authInfo = {
            userID : results.user.uid,
            name : results.user.displayName,
            profilePhoto : results.user.photoURL,
            isAuth : true,
        };
        localStorage.setItem("auth", JSON.stringify(authInfo)) //Local storage takes only string not objects so converting to string.
        navigate("/expense-tracker");
    }

    if (isAuth){
        return <Navigate to="/expense-tracker"/>
    }
    return (
        <div className="login-page">
            <p>Sign in with Google</p>
            <button className="login-with-google-button" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}