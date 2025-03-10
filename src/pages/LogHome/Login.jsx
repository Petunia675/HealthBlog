import React from "react"
import { auth, provider } from "../../firebase-config"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export default function Login({setIsAuth}) {
    
    let navigate = useNavigate()
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate("/")
        }) 

       
    }
    return (
        <div className="LoginPage">
            <p>Sign In With Google</p>
            <button className="Login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}
