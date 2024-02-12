import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase.config';
import { useState } from "react";
import { useRouter } from 'next/navigation'

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
        <h1>Create an account</h1>
        <p>Email</p>
        <input 
          type="email"
          placeholder='Email...'
          value={registerEmail}
          onChange={handleChangeEmailValue}
        />
        <p>Password</p>
        <input 
          type="password"
          placeholder='Password...'
          value={registerPassword}
          onChange={handleChangePasswordValue}
        />
        <button 
          onClick={() => {
            register()
            setRegisterEmail("")
            setRegisterPassword("")
          }}
        >
          Register User
        </button>
      </>
    )
}
