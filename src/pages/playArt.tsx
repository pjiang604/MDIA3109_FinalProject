import MusicAndArtCarousel from "@/components/carousel/MusicAndArtCarousel"
import Nav from "@/components/navigation/NavBar"

export default function PlayArt() {
  // main had className flex min-h-screen flex-col items-center justify-between p-24
  return (
    <main className={``} >
      <div id="mainContainer" className={`flex flex-col`}>
        <MusicAndArtCarousel></MusicAndArtCarousel>
      </div>
      <Nav type="art" />
    </main>
  )
}
