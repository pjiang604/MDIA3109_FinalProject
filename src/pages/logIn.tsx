import Link from "next/link"


export default function LogIn() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`} >
      <div id="mainContainer" className={`flex flex-col`}>
        <p>this is the login screen</p>

        <Link href='/home'><b>Go to home</b></Link>
      </div>
    </main>
  )
}
