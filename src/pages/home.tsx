
import HeaderNav from "@/components/navigation/HeaderNav"
import Nav from "@/components/navigation/NavBar"
import Link from "next/link"
import { useState } from "react"
import { neighbourhoods } from "@/data/neighbourhoods"
import { artists } from "@/data/artists"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useRefreshToken from "@/hooks/useRefreshToken"
import { authorize } from "./api/authorize"

// Components
import UserLogout from "@/firebase/UserLogout"
import SmallPlaylist from "@/components/buttons/SmallPlaylist"


export default function Home() {
  const [image, setImage] = useState(publicArt);

  const [dataNeigh, setDataNeigh] = useState(neighbourhoods)
  const [dataArtist, setDataArtist] = useState(artists)

  const [accessToken, setAccessToken] = useState("");
  const [codeVerifier, setCodeVerifier] = useState('')


  const router = useRouter();
  const code = router.query.code;
  const song = router.query.songUri;
  console.log(song, "songURI")
  useRefreshToken(code as string);


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
    <main >
      <HeaderNav text="Welcome back, John" type="profile" />
      <div id="mainContainer" className={`flex flex-col`}>

        <div>
          <h2>Art based on Neighbourhood</h2>
          <div  className={`flex flex-row`}>
            {
              dataNeigh && dataNeigh.map((a, aIndex) => {
                return (
                  <SmallPlaylist
                    key={aIndex}
                    name={a.name}
                    image={a.image} />
                )
              })}
          </div>
        </div>

        <div>
          <h2>Discover New Canadian Artists</h2>
          <div  className={`flex flex-row`}>
            {
              dataArtist && dataArtist.map((n, nIndex) => {
                return (
                  <SmallPlaylist
                    key={nIndex}
                    name={n.name}
                    image={n.image} />
                )
              })}
          </div>
        </div>

        <UserLogout />
        {
          image && image.map((data, index) => (
            <Image 
              src={`${data.image}`}
              width={100}
              height={100}
              alt="public art"
            />
          ))
        }
      </div>
      <Nav type="home" />
    </main>
  )
}