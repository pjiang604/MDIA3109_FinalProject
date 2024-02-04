import HeaderNav from "@/components/navigation/HeaderNav"
import Nav from "@/components/navigation/NavBar"
import Link from "next/link"
import SpotifyPlayer from 'react-spotify-web-playback';
import { useState, useEffect } from "react";
import { authorize } from "./api/authorize";
import { useRouter } from "next/router";
import useRefreshToken from "@/hooks/useRefreshToken";

export default function Home() {
  const [accessToken, setAccessToken] = useState("");
  const [codeVerifier, setCodeVerifier] = useState('')

  const router = useRouter();
  const code = router.query.code;
  useRefreshToken(code as string);
  
  useEffect(() =>{
    setAccessToken(`${localStorage.getItem("access_token")}`)
    console.log(accessToken)
    
  })

  return (
    <main className={``} >
      <HeaderNav text="Welcome back, John" type="profile" />
      <div id="mainContainer" className={`flex flex-col`}>
        <h1>This is the index/home page</h1>
        <Link href='/logIn'>Go to login</Link>
        <Link href='/browse'>Go to browse </Link>
        <Link href='/allNeighbourhood'>Go to allNeighbourhood</Link>
        <Link href='/neighbourhood/[area]'>Go to neighbourhood area page</Link>
        <Link href='/playMusic'>Go to playMusic</Link>
        <Link href='/playArt'>Go to playArt</Link>
        <p>Web player test</p>
        <button onClick={authorize}>Authorize</button>
        <div>
          {
            accessToken ?

              <SpotifyPlayer
                token={accessToken}
                uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
              />
              :
              <p>No access token</p>
          }

        </div>
      </div>
      <Nav type="home" />
    </main>
  )
}
