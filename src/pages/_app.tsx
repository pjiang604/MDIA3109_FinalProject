import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MusicPlayer from '@/components/spotifyPlayer'
import { useState, useEffect } from 'react';
import { authorize } from './api/authorize';
import { useRouter } from 'next/router';
import Nav from '@/components/navigation/NavBar';
import { usePathname } from 'next/navigation';
import useRefreshToken from '@/hooks/useRefreshToken';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';

export default function App({ Component, pageProps }: AppProps) {

  const [uriData, setUriData] = useState<string>()
  const [offsetData, setOffsetData] = useState<number>()
  const router = useRouter()
  const pathname = usePathname()
  const code = router.query.code;
  const [accessTokenApp, setAccessTokenApp] = useState<string>("")

  const [type, setType] = useState<string>("")


  const { accessToken, loading } = useRefreshToken(code as string);

  console.log(uriData, "uri data")


  useEffect(() => {
    if ((accessToken && !loading) ||
      !accessTokenApp || accessTokenApp === "") {
      setAccessTokenApp(`${localStorage.getItem("access_token")}`)
    } else {
      console.log("_app.tsx page: local storage undefined")
    }

  }, [accessToken, loading]);


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


  const { device } = useMediaQuery({
    breakpoints: { desktop: 1080, tablet: 800, mobile: 0 }
  })

  return (
    <>
      {
        device === "mobile" ?
          <>
            <Component {...pageProps} />
            <div className={`fixed bottom-0 w-full`}>
              {
                type && type === "none" ?
                  <></>
                  :
                  <>
                    <MusicPlayer
                      accessToken={accessTokenApp}
                      uri={uriData}
                      offset={offsetData ?? 0}
                    />
                    <Nav type={type} />
                  </>
              }
            </div >
          </>
          :
          <>
            {
              device === "tablet" ?
                <>
                  <Component {...pageProps} />
                  {type && type !== "none" && <Nav type={type} />}
                  <div className={`fixed bottom-0 w-full`}>
                    {
                      type && type === "none" ?
                        <></>
                        :
                        <>
                          <MusicPlayer
                            accessToken={accessTokenApp}
                            uri={uriData}
                            offset={offsetData ?? 0}
                          />
                        </>
                    }
                  </div >
                </>
                :
                <>
                <div className={`flex flex-row`}>
                {type && type !== "none" && <Nav type={type} />}
                <Component {...pageProps} />
                </div>
                 
                  <div className={`fixed bottom-0 w-full`}>
                    {
                      type && type === "none" ?
                        <></>
                        :
                        <>
                          <MusicPlayer
                            accessToken={accessTokenApp}
                            uri={uriData}
                            offset={offsetData ?? 0}
                          />
                        </>
                    }
                  </div >
                </>
            }
          </>

      }

    </>

  )
}
