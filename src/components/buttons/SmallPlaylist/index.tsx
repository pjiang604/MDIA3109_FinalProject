import Image from "next/image"
import Link from "next/link"
import ContentLoader from "react-content-loader"

enum ESmallPlaylist {
    Neighbourhood = "neighbourhood",
    Artist = "artist",
}

export default function SmallPlaylist({
    name,
    image,
    type,
    showName
}: ISmallPlaylist) {
    return (
        <>
            {type === ESmallPlaylist.Neighbourhood ?
                <Link href={`/neighbourhood/${name}`}>
                    <div className={`relative aspect-square rounded-md flex justify-center items-center`}>
                        {showName === false ? <></> : <h2 className={`z-10 absolute text-[#f8fafc] font-bold text-xl text-center`}>{name}</h2>}
                        <Image
                            src={image}
                            height={500}
                            width={500}
                            alt="neighbourhood"
                            className={`object-cover h-full rounded-md z-0`} />
                    </div>
                </Link>
                :
                <>
                    {
                        type === ESmallPlaylist.Artist &&
                        <Link href={`/artist/${name}`}>
                            <div className={`relative aspect-square rounded-md flex justify-center items-center`}>
                                {showName === false ? <></> : <h2 className={`z-10 absolute text-[#f8fafc] font-bold text-xl text-center`}>{name}</h2>}
                                <Image
                                    src={image}
                                    height={500}
                                    width={500}
                                    alt="neighbourhood"
                                    className={`object-cover h-full rounded-md z-0`} />
                            </div>
                        </Link>
                    }
                </>

            }
        </>

    )
}
