import Image from "next/image"
import Link from "next/link"

enum NavType {
    Home = "home",
    Browse = "browse", 
    Art = "art", 
    Music = "music", 
  }

export default function Nav({
    type
    
}: NavProps) {

    return (
        <div className={`w-full h-auto bg-darkGray flex flex-row items-center justify-evenly py-3`} >
            <div className={`flex flex-col items-center `}>
                <Link
                    href='/home'>
                    <Image
                        src={ type === NavType.Home ? "/Navigation/home/home_active.png" : "/Navigation/home/home.png" }
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
                        src={ type === NavType.Browse ? "/Navigation/browse/browse_active.png" : "/Navigation/browse/browse.png" }
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
                        src={ type === NavType.Music ? "/Navigation/music/music_active.png" : "/Navigation/music/music.png" }
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
                        src={ type === NavType.Art ? "/Navigation/art/art_active.png" : "/Navigation/art/art.png" }
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
    )
}
