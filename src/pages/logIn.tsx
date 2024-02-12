import Link from "next/link"

// Components
import UserEmailSignIn from "@/firebase/UserEmailSignin"

export default function LogIn() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`} >
      <div id="mainContainer" className={`flex flex-col`}>
        <UserEmailSignIn />
        <h2>No Account?</h2>
        <Link href={"/signUp"}>Sign up here!</Link>
      </div>
    </main>
  )
}
