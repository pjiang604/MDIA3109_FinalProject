import SongCard from "@/components/buttons/SongCard";
import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import { getPlaylist } from "../api/getMusic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { neighbourhoods } from "@/data/neighbourhoods";
import { getArt } from "@/hooks/getArt";
import Carousel from "nuka-carousel";
import Image from "next/image";

export default function Area() {

  const [accessToken, setAccessToken] = useState<string>();
  const [playlistData, setPlaylistData] = useState<SpotifyPlaylist>()
  const [neighData, setNeighData] = useState([...neighbourhoods])
  const [song, setSong] = useState<string>()
  const [playlistId, setPlaylistId] = useState<string>()
  const [data, setData] = useState<PublicArt[]>([]);

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

  useEffect(() => {
    const fetchArt = async () => {
      const data = await getArt();
      setData(data)
    }
    fetchArt()

  }, [])


  const playSong = (songUri: string, index: number) => {
    router.push({
      pathname: '/playMusic',
      query: {
        songUri: songUri,
        playlist_id: `spotify:playlist:${playlistId}`,
        track_num: index
      }
    })
  }

  return (
    <main className={``} >
      <HeaderNav text={playlistData?.name || ""} type="full-backPlay" />
      <div id="mainContainer" className={`flex flex-col`}>
        <Carousel>
          {
            data && data.map((a, aIndex) => {
              return (
                <Image
                  key={aIndex}
                  src={`/PublicArt/img${aIndex + 1}.jpg`}
                  width={500}
                  height={300}
                  alt={a.title_of_work}
                  style={{
                    width: "500px",
                    height: "300px"
                  }}
                />
              )

            })
          }
        </Carousel>
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

    </main>
  )
}
