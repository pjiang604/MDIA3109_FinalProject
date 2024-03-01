
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
import { PuffLoader } from "react-spinners"
import Carousel from "nuka-carousel"


export default function Home() {
  const [image, setImage] = useState(publicArt);

  const [dataNeigh, setDataNeigh] = useState(neighbourhoods)
  const [dataArtist, setDataArtist] = useState(artists)
  // const artistIds: any = []
  const [dataArtists, setDataArtists] = useState<IArtistsData>()

  const [accessTokenHome, setAccessTokenHome] = useState("");

  const router = useRouter();
  const code = router.query.code;

  const { accessToken, loading } = useRefreshToken(code as string);

  useEffect(() => {
    if (accessToken && !loading ||
      !accessTokenHome) {
      const fetchData = async () => {
        try {
          if (typeof window !== 'undefined') {
            const getAccessToken = localStorage.getItem("access_token");
            setAccessTokenHome(`${getAccessToken}`);
            console.log(accessTokenHome, 'AccessTokenHome')

            if (getAccessToken !== "") {
              const stringArtistIds = dataArtist.map(a => a.artist_id).toString();
              const data = await getArtistProfiles(stringArtistIds);
              setDataArtists(data);
              console.log("artists data ", data);
            } else {
              console.log("Access token is empty");
            }
          }
        } catch (error) {
          console.error("Error fetching artist data:", error);
        }
      };

      fetchData();
    }

  }, [accessToken, loading]);


  return (
    <>
      {
        !accessTokenHome ?
          <main className={`relative`}>
            <PuffLoader
              color="#990F4B"
              className={styles.loading}
            />
          </main>

          :
          <main className={`flex-1`}>
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
                      dataArtists && dataArtists.artists && dataArtists.artists.map((com, comIndex) => {
                        return (
                          <SmallPlaylist
                            key={comIndex}
                            name={com.name}
                            image={com.images[0].url}
                            type="artist" />
                        )
                      })
                    }

                  </Carousel>

                </div>
              </div>

              <UserLogout />
              {/*not sure why all the images below are here, delete? */}
              {/* {
                image && image.map((data, index) => (
                  <Image
                    key={index}
                    src={`${data.image}`}
                    width={100}
                    height={100}
                    alt="public art"
                  />
                ))
              } */}
            </div>

          </main>
      }
    </>

  )
}
