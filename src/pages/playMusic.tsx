import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import useRefreshToken from "@/hooks/useRefreshToken";
import SpotifyPlayer from 'react-spotify-web-playback';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { authorize, getToken } from "./api/authorize"; //move this authorization button somewhere else later


export default function PlayMusic() {

  const [accessToken, setAccessToken] = useState("");
  const [codeVerifier, setCodeVerifier] = useState('')


  const router = useRouter();
  const code = router.query.code;
  const song = router.query.songUri;
  console.log(song, "songURI")
  useRefreshToken(code as string);


  useEffect(() => {
    setAccessToken(`${localStorage.getItem("access_token")}`)
  }, [authorize])

  useEffect(() => {
    console.log(accessToken, "access token");
  }, [accessToken]);

  return (
    <main className={``} >
      <HeaderNav text="Now Playing" type="simple-music" />
      <div id="mainContainer" className={`flex flex-col`}>

        <button onClick={authorize}>Authorize</button> {/*move this authorization button somewhere else later*/}

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
