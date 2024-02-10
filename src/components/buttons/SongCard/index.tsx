import Image from "next/image"


export default function SongCard({
    songTitle,
    artistName,
    coverUrl,
}: SongCard) {
    return (
        <div className={`bg-gray p-1 rounded-lg flex flex-row gap-2 my-1 `}>
            <div className={`rounded-lg rounded-lg `}>
                <Image
                src={coverUrl}
                width={50}
                height={50}
                className={`rounded-md`}
                alt="album cover"/>
            </div>
            <div>
                <p className={`font-semibold`}>{songTitle}</p>
                <p>{artistName}</p>

            </div>
        </div>
    )
}