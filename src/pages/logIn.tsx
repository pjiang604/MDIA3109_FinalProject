import Link from "next/link"
import styles from '@/styles/LogIn.module.css'
import Head from 'next/head'
import { useRouter } from "next/router"

// Components
import UserEmailSignIn from "@/firebase/UserEmailSignin"

export default function LogIn() {

  const router = useRouter()

  const anonUser = () => {
    sessionStorage.setItem("userType", "anonymous")
    router.push({
      pathname: '/home',
      query: {
        userType: "anonymous"
      }
    })
  }


  return (
    <main className={styles.container}>
      <Head>
        <title>Log In | Amplify</title>
      </Head>
      <div>
        <UserEmailSignIn />
        <p className={styles.notAccountText}>Don't have an account yet?</p>
        <Link className={styles.signUpLink} href={"/signUp"}>Sign up here.</Link>
        <p className={styles.notAccountText}>Just browsing?</p>
        <div className={styles.signUpLink} onClick={() => anonUser()}>Try Amplify without logging in</div>
      </div>
    </main>
  )
}
