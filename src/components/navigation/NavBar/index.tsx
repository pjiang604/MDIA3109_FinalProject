import Image from "next/image"
import Link from "next/link"
import { useMediaQuery } from "@react-hooks-hub/use-media-query"
import { useEffect, useState } from "react"
import { getRecentPlayed } from "@/pages/api/getMusic"
import SmallPlaylist from "@/components/buttons/SmallPlaylist"
import { neighbourhoods } from "@/data/neighbourhoods"

enum NavType {
    Home = "home",
    Browse = "browse",
    Art = "art",
    Music = "music",
}

export default function Nav({
    type

}: NavProps) {

    const { device } = useMediaQuery({
        breakpoints: { desktop: 1080, tablet: 800, mobile: 0 }
    })


    const [recentData, setRecentData] = useState<SpotifyRecentlyPlayed>()
    const [dataNeigh, setDataNeigh] = useState(neighbourhoods)


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
        <>
            {
                device === "desktop" ?
                    <div className={`w-twentyp h-full bg-darkGray flex flex-col items-start gap-14 py-tenp`} >
                        <div className={`flex flex-col items-center gap-2 mx-auto`}>
                            <Link href='/home' className={`flex flex-row gap-8 items-center`}>
                                <Image
                                    src={type === NavType.Home ? "/Navigation/home/home_active.png" : "/Navigation/home/home.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className={`h-8 w-8`}
                                    alt="home"
                                />
                                <p className={`${type === NavType.Home ? `text-white` : `text-battleshipGray`}`}>Home</p>
                            </Link>

                        </div>
                        <div className={`flex flex-col items-center gap-2 mx-auto`}>
                            <Link href='/browse' className={`flex flex-row gap-8 items-center`}>
                                <Image
                                    src={type === NavType.Browse ? "/Navigation/browse/browse_active.png" : "/Navigation/browse/browse.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className={`h-8 w-8`}
                                    alt="browse"
                                />
                                <p className={`${type === NavType.Browse ? `text-white` : `text-battleshipGray`}`}>Browse</p>
                            </Link>

                        </div>
                        <div className={`flex flex-col items-start`}>
                            <Link href='/allNeighbourhood' className={`flex flex-row gap-8 items-center mx-auto`}>
                                <Image
                                    src={type === NavType.Music ? "/Navigation/music/music_active.png" : "/Navigation/music/music.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className={`h-8 w-8`}
                                    alt="music"
                                />
                                <p className={`${type === NavType.Music ? `text-white` : `text-battleshipGray`}`}>Music</p>
                            </Link>
                            <div>
                                {
                                    recentData && recentData.items.map((r, rIndex) => {
                                        return (
                                            <>
                                                {
                                                    rIndex < 4 &&
                                                    <div className={`flex flex-row justify-evenly items-center`}>
                                                        <div className={`w-1/3 my-6`}>
                                                            <SmallPlaylist
                                                                key={rIndex}
                                                                image={r.track.album.images[0].url}
                                                                type='artist' />
                                                        </div>
                                                        <div className={`w-1/3`}>
                                                            <p className={`text-white text-center`}>{r.track.artists[0].name}</p>
                                                        </div>
                                                    </div>

                                                }
                                            </>

                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={`flex flex-col items-start`}>
                            <Link href='/playArt' className={`flex flex-row gap-8 items-center mx-auto`}>
                                <Image
                                    src={type === NavType.Art ? "/Navigation/art/art_active.png" : "/Navigation/art/art.png"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className={`h-8 w-8`}
                                    alt="art"
                                />
                                <p className={`${type === NavType.Art ? `text-white` : `text-battleshipGray`}`}>Art</p>
                            </Link>
                            <div>
                                {
                                    dataNeigh && dataNeigh.map((a, aIndex) => {
                                        return (
                                            <>
                                                {
                                                    aIndex < 4 &&
                                                    <div className={`flex flex-row justify-evenly items-center`}>
                                                        <div className={`w-1/3 my-6`}>
                                                            <SmallPlaylist
                                                                key={aIndex}
                                                                image={a.image}
                                                                type="neighbourhood" />
                                                        </div>
                                                        <div className={`w-1/3`}>
                                                            <p className={`text-white text-center`}>{a.name}</p>
                                                        </div>
                                                    </div>
                                                }
                                            </>

                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                    : //TABLET 
                    <>
                        {
                            device === "tablet" ?
                                <div className={`fixed left-0 top-0 w-eightp pt-tenp
                    w-eightp h-full bg-darkGray flex flex-col items-center gap-12 py-3`} >
                                    <div className={`flex flex-col items-center `}>
                                        <Link
                                            href='/home'>
                                            <Image
                                                src={type === NavType.Home ? "/Navigation/home/home_active.png" : "/Navigation/home/home.png"}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className={`h-8 w-8`}
                                                alt="home"
                                            />
                                        </Link>
                                    </div>
                                    <div className={`flex flex-col items-center `}>
                                        <Link
                                            href='/browse'>
                                            <Image
                                                src={type === NavType.Browse ? "/Navigation/browse/browse_active.png" : "/Navigation/browse/browse.png"}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className={`h-8 w-8`}
                                                alt="browse"
                                            />
                                        </Link>
                                    </div>
                                    <div className={`flex flex-col items-center gap-2 `}>
                                        <Link
                                            href='/allNeighbourhood'>
                                            <Image
                                                src={type === NavType.Music ? "/Navigation/music/music_active.png" : "/Navigation/music/music.png"}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className={`h-8 w-8`}
                                                alt="music"
                                            />
                                        </Link>
                                        <div>
                                            {
                                                recentData && recentData.items.map((r, rIndex) => {
                                                    return (
                                                        <>
                                                            {
                                                                rIndex < 4 &&
                                                                <div className={`m-3`}>
                                                                    <SmallPlaylist
                                                                        key={rIndex}
                                                                        image={r.track.album.images[0].url}
                                                                        name={r.track.artists[0].name}
                                                                        showName={false}
                                                                        type='artist' />
                                                                </div>

                                                            }
                                                        </>

                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className={`flex flex-col items-center `}>
                                        <Link
                                            href='/playArt'>
                                            <Image
                                                src={type === NavType.Art ? "/Navigation/art/art_active.png" : "/Navigation/art/art.png"}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className={`h-8 w-8`}
                                                alt="art"
                                            />
                                        </Link>
                                        <div>
                                            {
                                                dataNeigh && dataNeigh.map((a, aIndex) => {
                                                    return (
                                                        <>
                                                            {
                                                                aIndex < 4 &&
                                                                <div className={`m-3`}>
                                                                    <SmallPlaylist
                                                                        key={aIndex}
                                                                        image={a.image}
                                                                        name={a.name}
                                                                        showName={false}
                                                                        type="neighbourhood" />
                                                                </div>
                                                            }
                                                        </>

                                                    )
                                                })}
                                        </div>
                                    </div>
                                </div>
                                : //MOBILE
                                <div className={`w-full h-auto bg-darkGray flex flex-row items-center justify-evenly py-3`} >
                                    <div className={`flex flex-col items-center `}>
                                        <Link
                                            href='/home'>
                                            <Image
                                                src={type === NavType.Home ? "/Navigation/home/home_active.png" : "/Navigation/home/home.png"}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className={`h-8 w-8`}
                                                alt="home"
                                            />
                                        </Link>
                                        <p className={`${type === NavType.Home ? `text-white` : `text-battleshipGray`}`}>Home</p>
                                    </div>
                                    <div className={`flex flex-col items-center `}>
                                        <Link
                                            href='/browse'>
                                            <Image
                                                src={type === NavType.Browse ? "/Navigation/browse/browse_active.png" : "/Navigation/browse/browse.png"}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className={`h-8 w-8`}
                                                alt="browse"
                                            />
                                        </Link>
                                        <p className={`${type === NavType.Browse ? `text-white` : `text-battleshipGray`}`}>Browse</p>
                                    </div>
                                    <div className={`flex flex-col items-center `}>
                                        <Link
                                            href='/allNeighbourhood'>
                                            <Image
                                                src={type === NavType.Music ? "/Navigation/music/music_active.png" : "/Navigation/music/music.png"}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className={`h-8 w-8`}
                                                alt="music"
                                            />
                                        </Link>
                                        <p className={`${type === NavType.Music ? `text-white` : `text-battleshipGray`}`}>Music</p>
                                    </div>
                                    <div className={`flex flex-col items-center `}>
                                        <Link
                                            href='/playArt'>
                                            <Image
                                                src={type === NavType.Art ? "/Navigation/art/art_active.png" : "/Navigation/art/art.png"}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className={`h-8 w-8`}
                                                alt="art"
                                            />
                                            <p className={`${type === NavType.Art ? `text-white` : `text-battleshipGray`}`}>Art</p>
                                        </Link>
                                    </div>
                                </div>
                        }
                    </>
            }
        </>


    )
}
