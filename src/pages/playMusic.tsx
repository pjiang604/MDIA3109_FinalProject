import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import SpotifyPlayer from 'react-spotify-web-playback';
import { authorize } from "./api/authorize";


export default function PlayMusic() {

  const router = useRouter();
  const [accessToken, setAccessToken] = useState("");
  const song = router.query.songUri;
  console.log(song, "songURI")

  
  useEffect(() => {
    if (typeof window !== 'undefined') {
        setAccessToken(`${localStorage.getItem("access_token")}`)
    } else {
        console.log("play music page: local storage undefined")
    }
}, [authorize])

useEffect(() => {
    console.log(accessToken, "access token");
}, [accessToken]);

  return (
    <main className={``} >
      <HeaderNav text="Now Playing" type="simple-music" />
      <div id="mainContainer" className={`flex flex-col`}>

      <div>
                    {
                        accessToken && song ?

                            <SpotifyPlayer
                                token={accessToken}
                                uris={[`${song}`]}
                                play={true}
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
