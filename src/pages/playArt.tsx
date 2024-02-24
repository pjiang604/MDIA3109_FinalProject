import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Carousel from 'nuka-carousel';
import styles from "@/styles/PlayArt.module.css"
import Head from 'next/head'
import { useRouter } from "next/router";
import { authorize } from "./api/authorize";
import SpotifyPlayer from 'react-spotify-web-playback';
import { getPlaylist } from "./api/getMusic";

// Components
import Nav from "@/components/navigation/NavBar"
import HeaderNav from "@/components/navigation/HeaderNav";

enum ArtUntitled {
  Untitled = "Untitled", // Untitled
  Mural = "Untitled (Mural)", // Untitled (Mural)
  Hundred = "Untitled (100)", // Untitled (100)
  Fountain = "Untitled (fountain)", // Untitled (fountain)
}

export default function PlayArt() {

  const [data, setData] = useState<PublicArt[]>([]);
  const [headerTitle, setHeadertitle] = useState<string>(`Captain George Vancouver`)

  const router = useRouter();
  const [playlistData, setPlaylistData] = useState<ArtistTopTracks>()
  const playlist_id = "spotify:playlist:2fuBkF1RV4sicOMYFDCRQh"
  const [accessToken, setAccessToken] = useState("");
  const song = `${router.query.songUri}`;
  const track_num = Number(router.query.track_num);

  const url = "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/public-art/records?limit=23"

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      console.log("response.data", response.data.results)
      setData(response.data.results);
    }

    const fetchPlaylist = async () => {
      try {
        const data = await getPlaylist(playlist_id);
        setPlaylistData(data);
        console.log("playlist data: ", data);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };
    fetchPlaylist();
    getData()

      .catch(console.error);
  }, []);

  const changeSlideHeader = (slideIndex: number) => {
    setHeadertitle(data[slideIndex].title_of_work)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAccessToken(`${localStorage.getItem("access_token")}`)

    } else {
      console.log("play music page: local storage undefined")
    }
  }, [authorize])

  return (
    <main className={``} >
      <Head>
        <title>Art | Amplify</title>
      </Head>
      <HeaderNav
        type="simple-backBtn"
        text={headerTitle} />
      <div className={`flex flex-col`}>
        <Carousel style={{ marginBottom: "100px" }}
          // renderCenterLeftControls={() => null}
          // renderCenterRightControls={() => null}
          renderBottomCenterControls={() => null}
          afterSlide={changeSlideHeader}
        >
          {
            data && data.map((d, index) => {
              return (
                <div key={index} className={styles.slideContainer}>
                  <Image
                    src={`/PublicArt/img${index + 1}.jpg`}
                    width={500}
                    height={300}
                    alt={d.title_of_work}
                    style={{
                      width: "500px",
                      height: "300px"
                    }}
                  />
                  {
                    d.title_of_work == ArtUntitled.Untitled ||
                      d.title_of_work == ArtUntitled.Mural ||
                      d.title_of_work == ArtUntitled.Hundred ||
                      d.title_of_work == ArtUntitled.Fountain ? <p>No Title</p>
                      :
                      <p>TITLE: {d.title_of_work}</p>
                  }
                  <p>Neighbourhood: {d.neighbourhood}</p>
                  <p>Year of Installation: {d.yearofinstallation}</p>
                  <p>Status: {d.status}</p>
                  {
                    d.artistprojectstatement == null ? <></> : <p>{d.artistprojectstatement.substring(0, 500)}</p>
                  }
                </div>
              )
            })
          }
        </Carousel>
        <div className={`mb-12`}>
          {
            accessToken ?
              <SpotifyPlayer
                token={accessToken}
                uris={playlist_id}
                play={true}
                hideAttribution={true}
                offset={track_num}
                hideCoverArt={true}
                styles={{
                  bgColor: "var(--black)",
                  color: "var(--white)",
                  trackArtistColor: "var(--white)",
                  trackNameColor: "var(--white)",
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


      <Nav type="art" />
    </main>
  )
}
