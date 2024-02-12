import Link from "next/link"

// Components
import UserRegistration from "@/firebase/UserRegistation"

export default function SignUp() {
  return (
    <main>
      <div id="mainContainer">
        <p>SIGN UP</p>
        <UserRegistration />
      </div>
    </main>
  )
}