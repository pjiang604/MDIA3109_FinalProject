
import HeaderNav from "@/components/navigation/HeaderNav"
import Nav from "@/components/navigation/NavBar"
import Link from "next/link"
import { neighbourhoods } from "@/data/neighbourhoods"
import { artists } from "@/data/artists"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useRefreshToken from "@/hooks/useRefreshToken"
import { authorize } from "./api/authorize"
import { publicArt } from '@/data/PublicArt';
import Image from "next/image";
import Carousel from "nuka-carousel"
import Head from 'next/head'

// Components
import UserLogout from "@/firebase/UserLogout"
import SmallPlaylist from "@/components/buttons/SmallPlaylist"
import HomeAndPlaylistCarousel from "@/components/carousel/HomeAndPlaylist"


export default function Home() {
  const [image, setImage] = useState(publicArt);

  const [dataNeigh, setDataNeigh] = useState(neighbourhoods)
  const [dataArtist, setDataArtist] = useState(artists)

  const [accessToken, setAccessToken] = useState("");
  const [codeVerifier, setCodeVerifier] = useState('')


  const router = useRouter();
  const code = router.query.code;
  const song = router.query.songUri;
  // console.log(song, "songURI")
  useRefreshToken(code as string);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAccessToken(`${localStorage.getItem("access_token")}`)
    } else {
      console.log("play music page: local storage undefined")
    }
  }, [authorize])

  // useEffect(() => {
  //     console.log(accessToken, "access token");
  // }, [accessToken]);

  return (
    <main>
      <Head>
        <title>Home | Amplify</title>
      </Head>
      <HeaderNav text="Welcome back, John" type="profile" />
      <div id="mainContainer" className={`flex flex-col`}>
        <div className={`flex flex-col justify-between`}>
          <HomeAndPlaylistCarousel />
          <h2>Art based on Neighbourhood</h2>
          <div className={`flex flex-row w-full`}>
            <Carousel
              wrapAround={true}
              slidesToShow={2.5}
              cellSpacing={10}
              withoutControls={true}
            >

              {
                dataNeigh && dataNeigh.map((a, aIndex) => {
                  return (
                    <SmallPlaylist
                      key={aIndex}
                      name={a.name}
                      image={a.image}
                      type="neighbourhood" />
                  )
                })}
            </Carousel>
          </div>
        </div>

        <div>
          <h2>Discover New Canadian Artists</h2>
          <div className={`flex flex-row w-full`}>
          <Carousel
              wrapAround={true}
              slidesToShow={2.5}
              cellSpacing={10}
              withoutControls={true}
            >
            {
              dataArtist && dataArtist.map((n, nIndex) => {
                return (
                  <SmallPlaylist
                    key={nIndex}
                    name={n.name}
                    image={n.image}
                    type="artist" />
                )
              })}
              </Carousel>
          </div>
        </div>

        <UserLogout />
        {
          image && image.map((data, index) => (
            <Image
            key={index}
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
