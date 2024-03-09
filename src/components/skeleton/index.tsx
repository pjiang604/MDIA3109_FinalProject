import Link from "next/link"
import styles from './Skeleton.module.css'
import ContentLoader from "react-content-loader"

export default function Skeleton({ type }: ISkeleton) {
    return (
        <>
            {
                type === "spotifyPlayer" ?
                    <Link href='logIn'>
                        <div className={`h-20 bg-black flex justify-center items-center`}>
                            <p className={`text-white`}>Log in to play music!</p>
                        </div>
                    </Link>
                    :
                    <>
                        {
                            type === "square" ?
                                <div className={styles.squareContainer}>
                                    <Link href={`/logIn`} >
                                        <h2 className={`z-10 font-bold text-lg text-center`}>Log in for exclusive content!</h2>
                                    </Link>
                                </div>

                                :
                                <>
                                    {
                                        type === "playlist" &&
                                        <>
                                            <div className={`flex justify-center`}>
                                                <Link href={`/logIn`} className={`${styles.playlistContainer}`}>
                                                    <h2 className={`z-10 font-bold text-lg text-center`}>Log in for exclusive content!</h2>
                                                </Link>
                                            </div>

                                            <ContentLoader
                                                width={'100%'}
                                                height={'20em'}
                                            >
                                                <rect y="6" rx="4" ry="4" width="100%" height="2em" />
                                                <rect y="55" rx="4" ry="4" width="100%" height="2em" />
                                                <rect y="104" rx="4" ry="4" width="100%" height="2em" />
                                                <rect y="153" rx="4" ry="4" width="100%" height="2em" />
                                                <rect y="202" rx="4" ry="4" width="100%" height="2em" />
                                                <rect y="251" rx="4" ry="4" width="100%" height="2em" />
                                            </ContentLoader>
                                        </>
                                    }
                                </>
                        }
                    </>
            }
        </>
    )
}