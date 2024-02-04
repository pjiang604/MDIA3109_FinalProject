import Nav from "@/components/navigation/NavBar";
import Playlist from "@/components/buttons/Playlist";


export default function AllNeighbourhood() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`} >
      <div id="mainContainer" className={`flex flex-col`}>
        <Playlist />
      </div>
      <Nav type="music"/>
    </main>
  )
}
