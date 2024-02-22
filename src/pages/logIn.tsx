import Link from "next/link"
import styles from '@/styles/LogIn.module.css'

// Components
import UserEmailSignIn from "@/firebase/UserEmailSignin"

export default function LogIn() {
  return (
    <main className={styles.container}>
      <div>
        <UserEmailSignIn />
        <p className={styles.notAccountText}>Don't have an account yet?</p>
        <Link className={styles.signUpLink} href={"/signUp"}>Sign up here.</Link>
      </div>
    </main>
  )
}
