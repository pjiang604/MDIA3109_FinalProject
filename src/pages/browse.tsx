import HeaderNav from "@/components/navigation/HeaderNav";
import SmallPlaylist from "@/components/buttons/SmallPlaylist"
import MusicArtTab from "@/components/browse/MusicArtTab";
import HomeAndPlaylistCarousel from "@/components/carousel/HomeAndPlaylist";
import { useState, useEffect } from "react";
import { getRecentPlayed } from "./api/getMusic";
import Carousel from "nuka-carousel";
import Head from 'next/head';
import Skeleton from "@/components/skeleton";
import styles from "@/styles/Browse.module.css"

export default function Browse() {

  const [recentData, setRecentData] = useState<SpotifyRecentlyPlayed>()

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        const recentData = await getRecentPlayed();
        setRecentData(recentData)
        console.log(recentData)
      } catch (error) {
        console.error("Error fetching recent data", error)
      }
    }
    fetchRecentData()

  }, []);

  return (
    <main className={`min-h-screen`} >
      <Head>
        <title>Browse | Amplify</title>
      </Head>
      <HeaderNav text="Browse" type="simple-backBtn" />
      <div className={`flex flex-col w-full items-center`}>
        <input type="text" placeholder="Search for art and music" className={styles.searchBar}></input>
      </div>
      <div id="mainContainer" className={`flex flex-col gap-4`}>
        <MusicArtTab />

        <h3>Past Searches</h3>
        {
          !recentData ?
            <SmallPlaylist
              image={'/Logo/logo.png'}
              type="skeleton" />
            :
            <Carousel
              wrapAround={true}
              slidesToShow={2.5}
              cellSpacing={10}
              withoutControls={true}
            >
              {
                recentData && recentData.items.map((r, rIndex) => {
                  return (
                    <SmallPlaylist
                      key={rIndex}
                      name={r.track.artists[0].name}
                      image={r.track.album.images[0].url}
                      type='artist' />
                  )
                })
              }
            </Carousel>
        }

      </div>
    </main>
  )
}
