import HeaderNav from "@/components/navigation/HeaderNav"
import Nav from "@/components/navigation/NavBar"
import Link from "next/link"

export default function Home() {

  return (
    <main className={``} >
      <HeaderNav text="Welcome back, John" type="profile"/>
      <div id="mainContainer" className={`flex flex-col`}>
        <h1>This is the index/home page</h1>
        <Link href='/logIn'>Go to login</Link>
        <Link href='/browse'>Go to browse </Link>
        <Link href='/allNeighbourhood'>Go to allNeighbourhood</Link>
        <Link href='/neighbourhood/[area]'>Go to neighbourhood area page</Link>
        <Link href='/playMusic'>Go to playMusic</Link>
        <Link href='/playArt'>Go to playArt</Link>
      </div>
      <Nav type="home" />
    </main>
  )
}
