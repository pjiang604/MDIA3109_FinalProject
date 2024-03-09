import Image from "next/image"

export default function SongCard({
    songTitle,
    artistName,
    coverUrl,
    type
}: SongCard) {
    return (
        <>
            {
                !type &&
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
            }
        </>
    )
}