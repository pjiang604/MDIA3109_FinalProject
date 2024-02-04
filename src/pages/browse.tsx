import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";


export default function Browse() {
  return (
    <main className={``} >
      <HeaderNav text="Browse" type="simple-backBtn" />
      <div id="mainContainer" className={`flex flex-col`}>


      </div>
      <Nav type="browse" />
    </main>
  )
}
