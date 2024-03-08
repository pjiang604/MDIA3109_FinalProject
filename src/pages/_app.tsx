import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MusicPlayer from '@/components/spotifyPlayer'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from '@/components/navigation/NavBar';
import { usePathname } from 'next/navigation';
import useRefreshToken from '@/hooks/useRefreshToken';
import { useMediaQuery } from '@react-hooks-hub/use-media-query';
import Loading from '@/components/loading';
import Skeleton from '@/components/skeleton';
import React from "react"

export default function App({ Component, pageProps }: AppProps) {
  React.useLayoutEffect = React.useEffect

  const [uriData, setUriData] = useState<string>()
  const [offsetData, setOffsetData] = useState<number>()
  const router = useRouter()
  const pathname = usePathname()
  const code = router.query.code;
  const userType = router.query.userType
  const [accessTokenApp, setAccessTokenApp] = useState<string>("")

  const [type, setType] = useState<string>("")


  const { accessToken, loading } = useRefreshToken(code as string);
  const [anonLoading, setAnonLoading] = useState(true)

  console.log(uriData, "uri data")




  useEffect(() => {
    const fetchAccessToken = async () => {
      if (userType === "anonymous") {
        setAnonLoading(false)
        console.log("anonymous user, no data pulled")
      } else {
        try {
          let accessTokenFromSessionStorage = sessionStorage.getItem("access_token");
          while (!accessTokenFromSessionStorage || accessTokenFromSessionStorage === "") {
            console.log("No access token, retrying");
            await new Promise(resolve => setTimeout(resolve, 1000));
            accessTokenFromSessionStorage = sessionStorage.getItem("access_token");
          }
          setAccessTokenApp(accessTokenFromSessionStorage);

        } catch (error) {
          console.error("_app.tsx useEffect error", error);
        }
      }
    }
    fetchAccessToken()


  }, [accessToken]);


  useEffect(() => {
    const { playlist_id } = router.query
    const { track_num } = router.query
    setUriData(`${playlist_id}`)
    setOffsetData(Number(track_num))
    if (pathname === "/home") {
      setType("home")

    } else if (pathname === "/browse" ||
      pathname === "/charts" ||
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
                    {
                      !accessTokenApp ?
                        <Skeleton type='spotifyPlayer' />
                        :
                        <>
                          {
                            accessTokenApp ?
                              <MusicPlayer
                                accessToken={accessTokenApp}
                                uri={uriData}
                                offset={offsetData ?? 0}
                              />
                              :
                              <Loading />
                          }

                        </>
                    }

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
                          {
                            !accessTokenApp ?
                              <Skeleton type="spotifyPlayer" />
                              :
                              <>
                                {
                                  accessTokenApp ?
                                    <MusicPlayer
                                      accessToken={accessTokenApp}
                                      uri={uriData}
                                      offset={offsetData ?? 0}
                                    />
                                    :
                                    <Loading />
                                }
                              </>
                          }

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
                          {
                            !accessTokenApp ?
                              <Skeleton type="spotifyPlayer" />
                              :
                              <>
                                {
                                  accessTokenApp ?
                                    <MusicPlayer
                                      accessToken={accessTokenApp}
                                      uri={uriData}
                                      offset={offsetData ?? 0}
                                    />
                                    :
                                    <Loading />
                                }
                              </>

                          }

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
