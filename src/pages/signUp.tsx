import Link from "next/link"
import styles from '@/styles/SignUp.module.css'
import Head from 'next/head'

// Components
import UserRegistration from "@/firebase/UserRegistation"

export default function SignUp() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Sign Up | Amplify</title>
      </Head>
      <div>
        {/* <p>SIGN UP</p> */}
        <UserRegistration />
        <p className={styles.haveAccountText}>Already have an account?</p>
        <Link className={styles.signInLink} href={"/logIn"}>Sign In</Link>
      </div>
    </main>
  )
}