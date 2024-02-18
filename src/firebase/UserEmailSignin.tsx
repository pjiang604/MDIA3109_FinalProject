import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation'

export default function UserEmailSignIn() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPasswod, setLoginPassword] = useState("");
    const router = useRouter();

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPasswod);
            console.log("SignIn : ",user);
            router.push('/spotifyLogin')
        } catch(error) {
            console.log(error)
        }
    }

    const handleChangeEmailValue = (event: any) => {
        setLoginEmail(event.target.value);
    };

    const handleChangePasswordValue = (event: any) => {
        setLoginPassword(event.target.value);
    };

    return (
        <>
            <h1>Sign In</h1>
            <p>Email</p>
            <input 
                type="email"
                placeholder='Email...'
                value={loginEmail}
                onChange={handleChangeEmailValue}
            />
            <p>Passwords</p>
            <input 
                type="password"
                placeholder='Password...'
                value={loginPasswod}
                onChange={handleChangePasswordValue}
            />
            <button
                onClick={() => {
                    login()
                    setLoginEmail("")
                    setLoginPassword("")
                }}
            >
                LOGIN
            </button>
        </>
    )
}

