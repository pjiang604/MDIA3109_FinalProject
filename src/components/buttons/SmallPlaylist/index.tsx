import Image from "next/image"

export default function SmallPlaylist({
}) {
    return (
        <div className={`relative w-1/2 h-autorounded-md`}>
            <div className={`relative flex justify-center items-center`}>
                <h2 className={`z-10 absolute text-[#f8fafc] font-bold text-xl`}>Kitsilano</h2>
                <Image
                    src="/Neighbourhoods/kitsilano.png"
                    height={140}
                    width={140}
                    alt="neighbourhood"
                    className={`object-fit blur-xs rounded-md z-0`} />
            </div>
        </div>
    )
}