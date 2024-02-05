import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import SmallPlaylist from "@/components/buttons/SmallPlaylist"
import MusicArtTab from "@/components/browse/MusicArtTab";
import MusicAndArtCarousel from "@/components/carousel/MusicAndArtCarousel";

export default function Browse() {
  return (
    <main className={``} >
      <HeaderNav text="Browse" type="simple-backBtn" />
      <div id="mainContainer" className={`flex flex-col`}>
        <MusicArtTab />
      </div>
      <Nav type="browse" />
    </main>
  )
}
