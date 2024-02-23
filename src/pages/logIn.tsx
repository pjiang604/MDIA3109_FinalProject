import Link from "next/link"
import styles from '@/styles/LogIn.module.css'
import Head from 'next/head'

// Components
import UserEmailSignIn from "@/firebase/UserEmailSignin"

export default function LogIn() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Log In | Amplify</title>
      </Head>
      <div>
        <UserEmailSignIn />
        <p className={styles.notAccountText}>Don't have an account yet?</p>
        <Link className={styles.signUpLink} href={"/signUp"}>Sign up here.</Link>
      </div>
    </main>
  )
}
