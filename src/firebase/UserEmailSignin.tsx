import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import styles from './Firebase.module.css'

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
            <h1 className={styles.signInTitle}>Sign In</h1>
            <div className={styles.inputInfo}>
                <p>Email</p>
                <input 
                    className={styles.inputBox}
                    type="email"
                    placeholder='Enter your email'
                    value={loginEmail}
                    onChange={handleChangeEmailValue}
                />
                <p>Passwords</p>
                <input 
                    className={styles.inputBox}
                    type="password"
                    placeholder='Enter your password'
                    value={loginPasswod}
                    onChange={handleChangePasswordValue}
                />
                <button
                    className={styles.loginBtn}
                    onClick={() => {
                        login()
                        setLoginEmail("")
                        setLoginPassword("")
                    }}
                >
                    LOGIN
                </button>
            </div>
        </>
    )
}

