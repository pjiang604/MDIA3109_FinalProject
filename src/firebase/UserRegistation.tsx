import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase.config';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import styles from './Firebase.module.css'

export default function UserRegistration() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const router = useRouter(); 

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log("Register: ", user);
            router.push('/logIn');
        } catch(error) {
            console.log(error)
        }
    }

    const handleChangeEmailValue = (event: any) => {
      setRegisterEmail(event.target.value);
    };

    const handleChangePasswordValue = (event: any) => {
      setRegisterPassword(event.target.value);
    };

    return (
      <>
        <h1 className={styles.createAccountText}>Create an account</h1>
        <div className={styles.inputInfo}>
          <p>Email</p>
          <input 
            className={styles.inputBox}
            type="email"
            placeholder='Enter your email'
            value={registerEmail}
            onChange={handleChangeEmailValue}
          />
          <p>Password</p>
          <input 
            className={styles.inputBox}
            type="password"
            placeholder='Enter your password'
            value={registerPassword}
            onChange={handleChangePasswordValue}
          />
          <button 
            className={styles.loginBtn}
            onClick={() => {
              register()
              setRegisterEmail("")
              setRegisterPassword("")
            }}
          >
            Register User
          </button>
        </div>
      </>
    )
}
