import SongCard from "@/components/buttons/SongCard";
import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import { getPlaylist } from "../api/getMusic";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Area() {  //Need to insert the name of the neighbourhood area and insert it into the header nav text

  const [accessToken, setAccessToken] = useState<string>();
  const [playlistData, setPlaylistData] = useState<SpotifyPlaylist>()
  const [song, setSong] = useState<string>()

  const router = useRouter()

  useEffect(() => {

    if (typeof localStorage !== 'undefined') {
      const localAccessToken = localStorage.getItem("access_token") || "no token"
      setAccessToken(`${localAccessToken}`)
      console.log(accessToken)
    } else {
      console.log("neighbourhood area page: local storage undefined")
    }


    const fetchPlaylist = async () => {
      try {
        const data = await getPlaylist();
        setPlaylistData(data)
        console.log("playlist data: ", data)
      } catch (error) {
        console.error("error")
      }
    }
    fetchPlaylist()

  }, [])

  const playSong = (songUri: string) =>{
    router.push({
      pathname:'/playMusic',
      query: {songUri: songUri}
    })
  }
  
  return (
    <main className={``} >
      <HeaderNav text={playlistData?.name || ""} type="full-backPlay" />
      <div id="mainContainer" className={`flex flex-col`}>
        {
          playlistData && playlistData.tracks.items.map((i, index) => {
            const songUri = i.track.uri
            return (
              <div key={index}
                onClick={() => playSong(songUri)}>
                <SongCard
                  songTitle={i.track.name}
                  artistName={i.track.artists[0].name}
                  coverUrl={i.track.album.images[0].url} />
              </div>
            )
          })
        }

      </div>
      <Nav type="home" />
    </main>
  )
}
