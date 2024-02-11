import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";
import { useRouter } from 'next/navigation'

export default function UserLogout() {
  const router = useRouter();

  const logoutUser = async () => {
      await signOut(auth);
      router.push('/logIn');
      console.log("User logged out!");
  }
  return (
      <>
        <button onClick={() => {logoutUser()}} >
          Sign out
        </button>
      </>
  )
}

