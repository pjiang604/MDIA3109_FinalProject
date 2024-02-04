import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import SmallPlaylist from "@/components/buttons/SmallPlaylist"

export default function Browse() {
  return (
    <main className={``} >
      <HeaderNav text="Browse" type="simple-backBtn" />
      <div id="mainContainer" className={`flex flex-col`}>
        <SmallPlaylist />
      </div>
      <Nav type="browse" />
    </main>
  )
}
