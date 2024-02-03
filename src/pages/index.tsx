import Link from "next/link"

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`} >
      <h1>This is the index/home page</h1>
              <Link href='/logIn'>Go to login</Link>
              <Link href='/browse'>Go to browse </Link> 
              <Link href='/allNeighbourhood'>Go to allNeighbourhood</Link>
              <Link href='/neighbourhood/[area]'>Go to neighbourhood area page</Link>
              <Link href='/playMusic'>Go to playMusic</Link>
              <Link href='/playArt'>Go to playArt</Link>
    </main>
  )
}
