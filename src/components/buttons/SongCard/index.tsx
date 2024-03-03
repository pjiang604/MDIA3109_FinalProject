import Image from "next/image"
import Link from "next/link"
import ContentLoader from "react-content-loader"

export default function SongCard({
    songTitle,
    artistName,
    coverUrl,
    type
}: SongCard) {
    return (
        <>
            {
                !type ?
                    <div className={`bg-gray p-1 rounded-lg flex flex-row gap-2 my-1 px-2 py-3`}>
                        <div className={`rounded-lg rounded-lg `}>
                            <Image
                                src={coverUrl}
                                width={60}
                                height={60}
                                className={`rounded-md`}
                                alt="album cover" />
                        </div>
                        <div>
                            <p className={`font-semibold`}>{songTitle}</p>
                            <p>{artistName}</p>

                        </div>
                    </div>
                    :
                    <>
                        {
                            type === "skeleton" &&
                            <Link href="/logIn">
                                <p className={`text-center`}>Log in for exclusive content!</p>
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
                            </Link>

                        }
                    </>

            }
        </>

    )
}