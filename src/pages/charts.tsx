
import HeaderNav from "@/components/navigation/HeaderNav"
import { neighbourhoods } from "@/data/neighbourhoods"
import { artists } from "@/data/artists"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useRefreshToken from "@/hooks/useRefreshToken"
import { publicArt } from '@/data/PublicArt';
import styles from '../styles/Charts.module.css'

import Head from 'next/head'
import { getArtistProfiles } from "./api/getMusic"

// Components
import UserLogout from "@/firebase/UserLogout"
import SmallPlaylist from "@/components/buttons/SmallPlaylist"
import HomeAndPlaylistCarousel from "@/components/carousel/HomeAndPlaylist"

export default function Charts() {
  const [image, setImage] = useState(publicArt);

  const [dataNeigh, setDataNeigh] = useState(neighbourhoods)
  const [dataArtist, setDataArtist] = useState(artists)
  const [dataArtists, setDataArtists] = useState<IArtistsData>()


  const [accessTokenHome, setAccessTokenHome] = useState("");
  const [anonAccess, setAnonAccess] = useState(false)

  const router = useRouter();
  const code = router.query.code;
  const userType = router.query.userType


  const { accessToken, loading } = useRefreshToken(code as string);
  const [anonLoading, setAnonLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let accessTokenFromLocalStorage = localStorage.getItem("access_token");

        while (!accessTokenFromLocalStorage) {
          setAnonAccess(true)
          console.log("No access token, retrying");
          await new Promise(resolve => setTimeout(resolve, 1000));
          accessTokenFromLocalStorage = localStorage.getItem("access_token");
        }
        setAnonAccess(false)
        setAccessTokenHome(accessTokenFromLocalStorage);

        const stringArtistIds = dataArtist.map(a => a.artist_id).toString();
        const recentData = await getArtistProfiles(stringArtistIds);
        setDataArtists(recentData);
        console.log("Artists data", recentData);
      } catch (error) {
        console.error("Home.tsx useEffect error", error);
      }


    };

    fetchData();
  }, []);


  return (
    <>
      <main className={`flex-1`}>
        <Head>
          <title>Profile | Amplify</title>
        </Head>
        <HeaderNav text="Profile" type="profile" />
        <div id="mainContainer" className={`flex flex-col`}>
      
        </div>

      </main>
    </>

  )
}
