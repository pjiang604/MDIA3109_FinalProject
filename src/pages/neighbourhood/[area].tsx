import SongCard from "@/components/buttons/SongCard";
import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import { getPlaylist } from "../api/getMusic";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { neighbourhoods } from "@/data/neighbourhoods";


export default function Area() {  //Need to insert the name of the neighbourhood area and insert it into the header nav text

  const [accessToken, setAccessToken] = useState<string>();
  const [playlistData, setPlaylistData] = useState<SpotifyPlaylist>()
  const [neighData, setNeighData] = useState([...neighbourhoods])
  const [song, setSong] = useState<string>()
  const [playlistId, setPlaylistId] = useState<string>()

  const router = useRouter()
  const location = router.query.area
  console.log(location)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localAccessToken = localStorage.getItem("access_token") || "no token"
      setAccessToken(`${localAccessToken}`)
      console.log(accessToken)
    } else {
      console.log("neighbourhood area page: local storage undefined")
    }
  }, [])
  
  useEffect(() => {
    const neighbourhood = neighData.find(neigh => neigh.name === location);

    if (neighbourhood) {

      const playlist_id = neighbourhood.playlist_id;
      setPlaylistId(playlist_id)
  
      const fetchPlaylist = async () => {
        try {
          const data = await getPlaylist(playlist_id);
          setPlaylistData(data);
          console.log("playlist data: ", data);
        } catch (error) {
          console.error("Error fetching playlist:", error);
        }
      };
  
      fetchPlaylist();
    } else {
      console.log("Error retrieving location or neighData");
    }
  }, [location, neighData]);
  

  const playSong = (songUri: string, index: number) => {
    router.push({
      pathname: '/playMusic',
      query: { songUri: songUri,
                playlist_id: `spotify:playlist:${playlistId}`,
                track_num: index }
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
                onClick={() => playSong(songUri, index)}>
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
