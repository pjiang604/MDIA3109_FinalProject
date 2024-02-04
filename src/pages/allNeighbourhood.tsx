import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";


export default function AllNeighbourhood() {
  return (
    <main className={``} >
      <HeaderNav text="Art Based on Neighbourhood" type="simple-backBtn" />
      <div id="mainContainer" className={`flex flex-col`}>

      </div>
      <Nav type="music" />
    </main>
  )
}
