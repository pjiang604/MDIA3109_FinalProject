import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import Playlist from "@/components/buttons/Playlist";


export default function AllNeighbourhood() {
  return (
    <main className={``} >
      <HeaderNav text="Art Based on Neighbourhood" type="simple-backBtn" />
      <div id="mainContainer" className={`flex flex-col`}>
        <Playlist />
      </div>
      <Nav type="music" />
    </main>
  )
}
