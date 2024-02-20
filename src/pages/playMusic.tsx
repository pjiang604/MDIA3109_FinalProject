import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import SpotifyPlayer, { contextType, spotifyApi } from 'react-spotify-web-playback';
import { authorize } from "./api/authorize";
import styles from '../styles/PlayMusic.module.css'


export default function PlayMusic() {

    const router = useRouter();
    const [accessToken, setAccessToken] = useState("");
    const song = `${router.query.songUri}`;
    const track_num = Number(router.query.track_num);
    const playlist = router.query.playlist_id

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setAccessToken(`${localStorage.getItem("access_token")}`)

        } else {
            console.log("play music page: local storage undefined")
        }
    }, [authorize])

    return (
        <main className={`bg-battleshipGray min-h-screen`} >
            <HeaderNav text="Now Playing" type="simple-music" />
            <div id="mainContainer" className={`flex flex-col`}>
                <div className={styles.playerContainer}>
                    {
                        accessToken && song && playlist ?
                            <SpotifyPlayer
                                token={accessToken}
                                uris={playlist}
                                play={true}
                                hideAttribution={true}
                                offset={track_num}
                                hideCoverArt={true}
                                styles={{
                                    bgColor: "",
                                    color: "white",
                                    trackArtistColor: "white",
                                    trackNameColor: "white"
                                }}
                            />
                            :
                            <>
                                {
                                    !accessToken ?
                                        <p>Please log in to play music!</p>
                                        :
                                        <>
                                            {
                                                !song &&
                                                <></>
                                            }
                                        </>
                                }
                            </>

                    }

                </div>

            </div>
            <Nav type="music" />
        </main>
    )
}
