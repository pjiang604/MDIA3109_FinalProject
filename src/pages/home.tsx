import HeaderNav from "@/components/navigation/HeaderNav"
import { neighbourhoods } from "@/data/neighbourhoods"
import { artists } from "@/data/artists"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useRefreshToken from "@/hooks/useRefreshToken"
import { publicArt } from '@/data/PublicArt';
import styles from '../styles/Home.module.css'

import Head from 'next/head'
import { getArtistProfiles } from "./api/getMusic"

// Components
import UserLogout from "@/firebase/UserLogout"
import SmallPlaylist from "@/components/buttons/SmallPlaylist"
import HomeAndPlaylistCarousel from "@/components/carousel/HomeAndPlaylist"
import Carousel from "nuka-carousel"
import Loading from "@/components/loading"

export default function Home() {
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
        let accessTokenFromSessionStorage = sessionStorage.getItem("access_token");

        while (!accessTokenFromSessionStorage) {
          setAnonAccess(true)
          console.log("No access token, retrying");
          await new Promise(resolve => setTimeout(resolve, 1000));
          accessTokenFromSessionStorage = sessionStorage.getItem("access_token");
        }
        setAnonAccess(false)
        setAccessTokenHome(accessTokenFromSessionStorage);

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
      <main className={styles.main}>
        <Head>
          <title>Home | Amplify</title>
        </Head>
        <HeaderNav text="Welcome back, John" type="profile" />
        <div id="mainContainer" className={styles.mainContainer}>
          <div className={styles.carouselContainer}>
            <HomeAndPlaylistCarousel />
          </div>
          <h2 className={styles.sectionTitle}>Art based on Neighbourhood</h2>
          <div className={styles.carouselContainer}>
            <Carousel
              className={styles.carousel}
              wrapAround={true}
              slidesToShow={2.5}
              cellSpacing={10}
              withoutControls={true}
            >
              {
                dataNeigh && dataNeigh.map((a, aIndex) => (
                  <SmallPlaylist
                    key={aIndex}
                    name={a.name}
                    image={a.image}
                    type="neighbourhood"
                  />
                ))
              }
            </Carousel>
          </div>
          <div>
            <h2 className={styles.sectionTitle}>Discover New Canadian Artists</h2>
            <div className={styles.carouselContainer}>
              {dataArtists ?
                <Carousel
                  className={styles.carousel}
                  wrapAround={true}
                  slidesToShow={2.5}
                  cellSpacing={10}
                  withoutControls={true}
                >
                  {
                    dataArtists.artists && dataArtists.artists.map((com, comIndex) => (
                      <SmallPlaylist
                        key={comIndex}
                        name={com.name}
                        image={com.images[0].url}
                        type="artist"
                      />
                    ))
                  }
                </Carousel>
                :
                <SmallPlaylist
                  image={'/Logo/logo.png'}
                  type="skeleton"
                />
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
