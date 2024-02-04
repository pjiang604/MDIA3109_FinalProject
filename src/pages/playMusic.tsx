import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";


export default function PlayMusic() {
  return (
    <main className={``} >
            <HeaderNav text="Now Playing" type="simple-music" />
      <div id="mainContainer" className={`flex flex-col`}>

      </div>
      <Nav type="music"/>
    </main>
  )
}
