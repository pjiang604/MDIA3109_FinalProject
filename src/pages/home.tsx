import HeaderNav from "@/components/navigation/HeaderNav"
import Nav from "@/components/navigation/NavBar"
import Link from "next/link"

// Components
import UserLogout from "@/firebase/UserLogout"

export default function Home() {

  return (
    <main className={``} >
      <HeaderNav text="Welcome back, John" type="profile"/>
      <div id="mainContainer" className={`flex flex-col`}>
        <h1>This is the home page</h1>
        <Link href='/browse'>Go to browse </Link>
        <Link href='/allNeighbourhood'>Go to allNeighbourhood</Link>
        <Link href='/neighbourhood/[area]'>Go to neighbourhood area page</Link>
        <Link href='/playMusic'>Go to playMusic</Link>
        <Link href='/playArt'>Go to playArt</Link>

        <UserLogout />

      </div>
      <Nav type="home" />
    </main>
  )
}