import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import SmallPlaylist from "@/components/buttons/SmallPlaylist"
import MusicArtTab from "@/components/browse/MusicArtTab";
import HomeAndPlaylistCarousel from "@/components/carousel/HomeAndPlaylist";;

export default function Browse() {
  return (
    <main className={``} >
      <HeaderNav text="Browse" type="simple-backBtn" />
      <div className={`flex flex-col w-96`}>
        <input type="text" placeholder="Search for art and music" className={`bg-zinc-200 py-2 rounded-md pl-4`}></input>
      </div>
      <div id="mainContainer" className={`flex flex-col`}>
        <MusicArtTab />
        <h3>Past Searches</h3>
      </div>
      <Nav type="browse" />
    </main>
  )
}
