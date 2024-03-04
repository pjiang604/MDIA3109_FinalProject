import SongCard from "@/components/buttons/SongCard";
import HeaderNav from "@/components/navigation/HeaderNav";
import { getArtist } from "../api/getMusic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { artists } from "@/data/artists";
import Image from "next/image";
import Carousel from "nuka-carousel";


export default function Artist() {

    const [accessToken, setAccessToken] = useState<string>();
    const [playlistData, setPlaylistData] = useState<ArtistTopTracks>()
    const [artistData, setArtistData] = useState([...artists])
    const [song, setSong] = useState<string>()
    const [playlistId, setPlaylistId] = useState<string>()

    const router = useRouter()
    const artistQuery = router.query.artist
    console.log(artistQuery)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const localAccessToken = sessionStorage.getItem("access_token") || "no token"
            setAccessToken(`${localAccessToken}`)
            console.log(accessToken)
        } else {
            console.log("neighbourhood area page: local storage undefined")
        }
    }, [])

    useEffect(() => {
        const artistProfile = artistData.find(artist => artist.name === artistQuery);

        if (artistProfile) {
            const playlist_id = artistProfile.artist_playlist
            setPlaylistId(playlist_id)

            const fetchPlaylist = async () => {
                try {
                    const data = await getArtist(playlist_id);
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
    }, [artistQuery, artistData]);




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
            <HeaderNav text={`${artistQuery}` || ""} type="full-backPlay" />
            <div id="mainContainer" className={`flex flex-col`}>
                <div className={`flex flex-row w-full mb-4`}>
                    <Carousel
                        withoutControls={true}>
                        {
                            playlistData && playlistData.tracks.items.map((i, index) => {
                                return (
                                    <Image
                                        key={index}
                                        src={i.track.album.images[0].url}
                                        width={500}
                                        height={500}
                                        alt={`${i.track.name} album cover`}

                                    />
                                )
                            })
                        }

                    </Carousel>
                </div>

                {
                    playlistData && playlistData.tracks.items.map((i, index) => {
                        const songUri = i.track.uri
                        return (
                            <div key={index}
                                onClick={() => playSong(songUri, index)}>
                                <SongCard
                                    songTitle={i.track.name}
                                    artistName={`${artistQuery}`}
                                    coverUrl={i.track.album.images[0].url} />
                            </div>
                        )
                    })
                }

            </div>
        </main>
    )
}