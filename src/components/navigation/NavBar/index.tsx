import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function Nav({

    type
    
}: NavProps) {

    return (
        <div className={`w-full h-auto absolute bottom-0 bg-darkGray flex flex-row items-center justify-evenly py-3`} >
            <div className={`flex flex-col items-center `}>
                <Link
                    href='/'>
                    <Image
                        src={ type === "home" ? "/Navigation/home/home_active.png" : "/Navigation/home/home.png" }
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={`h-8 w-8`}
                        alt="home"
                    />
                </Link>
                <p className={`${type === "home" ? `text-white` : `text-battleshipGray`}`}>Home</p>
            </div>
            <div className={`flex flex-col items-center `}>
                <Link
                    href='/browse'>
                    <Image
                        src={ type === "browse" ? "/Navigation/browse/browse_active.png" : "/Navigation/browse/browse.png" }
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={`h-8 w-8`}
                        alt="browse"
                    />
                </Link>
                <p className={`${type === "browse" ? `text-white` : `text-battleshipGray`}`}>Browse</p>
            </div>
            <div className={`flex flex-col items-center `}>
                <Link
                    href='/allNeighbourhood'>
                    <Image
                        src={ type === "music" ? "/Navigation/music/music_active.png" : "/Navigation/music/music.png" }
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={`h-8 w-8`}
                        alt="music"
                    />
                </Link>
                <p className={`${type === "music" ? `text-white` : `text-battleshipGray`}`}>Music</p>
            </div>
            <div className={`flex flex-col items-center `}>
                <Link
                    href='/playArt'>
                    <Image
                        src={ type === "art" ? "/Navigation/art/art_active.png" : "/Navigation/art/art.png" }
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={`h-8 w-8`}
                        alt="art"
                    />
                    <p className={`${type === "art" ? `text-white` : `text-battleshipGray`}`}>Art</p>
                </Link>
            </div>
        </div>
    )
}
