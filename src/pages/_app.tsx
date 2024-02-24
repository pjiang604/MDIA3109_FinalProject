import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MusicPlayer from '@/components/spotifyPlayer'
import { useState, useEffect } from 'react';
import { authorize } from './api/authorize';
import { useRouter } from 'next/router';
import Nav from '@/components/navigation/NavBar';
import { usePathname } from 'next/navigation';

export default function App({ Component, pageProps }: AppProps) {

  const [accessToken, setAccessToken] = useState("");
  const [uriData, setUriData] = useState<string>()
  const [offsetData, setOffsetData] = useState<number>()
  const router = useRouter()
  const pathname = usePathname()

  const [type, setType] = useState<string>("")

  console.log(uriData, "uri data")

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAccessToken(`${localStorage.getItem("access_token")}`)
    } else {
      console.log("_app.tsx page: local storage undefined")
    }
  }, [authorize])

  useEffect(() => {
    const { playlist_id } = router.query
    const { track_num } = router.query
    setUriData(`${playlist_id}`)
    setOffsetData(Number(track_num))
    if (pathname === "/home") {
      setType("home")

    } else if (pathname === "/browse" ||
      pathname.startsWith("/neighbourhood") ||
      pathname.startsWith("/artist")) {
      setType("browse")

    } else if (pathname === "/playMusic" ||
      pathname === "/allNeighbourhood") {
      setType("music")

    } else if (pathname === "/playArt") {
      setType("art")

    } else {
      setType("none")

    }

  })


  return (
    <>
      <Component {...pageProps} />
      <div className={`sticky bottom-0 w-full pt-8`}>
        <MusicPlayer
          accessToken={accessToken}
          uri={uriData}
          offset={offsetData ?? 0}
        />
        {
          type && type === "none" ?
            <></>
            :
            <Nav type={type} />
        }


      </div >
    </>

  )
}
