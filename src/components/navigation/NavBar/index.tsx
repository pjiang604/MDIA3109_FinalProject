import Image from "next/image"
import Link from "next/link"


export default function Nav({
    type = ""
}) {


    return (
        <div className={`w-full h-auto absolute bottom-0 bg-darkGray flex flex-row items-center justify-evenly py-3`} >
            <div className={`flex flex-col items-center `}>
                <Link
                    href='/'>
                    <Image
                        src="/Navigation/home.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={`h-8 w-8`}
                        alt="home"
                    />
                </Link>
                <p className={`text-battleshipGray`}>Home</p>
            </div>
            <div className={`flex flex-col items-center `}>
                <Link
                    href='/browse'>
                    <Image
                        src="/Navigation/browse.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={`h-8 w-8`}
                        alt="browse"
                    />
                </Link>
                <p className={`text-battleshipGray`}>Browse</p>
            </div>
            <div className={`flex flex-col items-center `}>
                <Link
                    href='/allNeighbourhood'>
                    <Image
                        src="/Navigation/music.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={`h-8 w-8`}
                        alt="music"
                    />
                </Link>
                <p className={`text-battleshipGray`}>Music</p>
            </div>
            <div className={`flex flex-col items-center `}>
                <Link
                    href='/'>
                    <Image
                        src="/Navigation/art.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={`h-8 w-8`}
                        alt="art"
                    />
                    <p className={`text-battleshipGray`}>Art</p>
                </Link>
            </div>
        </div>
    )
}
