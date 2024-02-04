import Image from "next/image"

export default function Playlist({
}) {
    return (
        <div className={`relative w-1/2 h-auto bg-zinc-400 px-2 pt-3 pb-5 rounded-md`}>
            <div className={`relative flex justify-center items-center`}>
                <h2 className={`z-10 absolute text-[#f8fafc] font-bold text-xl`}>Kitsilano</h2>
                <Image
                    src="/Neighbourhoods/kitsilano.png"
                    height={140}
                    width={140}
                    alt="neighbourhood"
                    className={`object-fit blur-xs rounded-md z-0`} />
            </div>
            <div className={`flex text-center justify-center`}>
                <p className={`font-medium uppercase text-sm bg-zinc-400`}>20 songs · 57 mins</p>
            </div>
        </div>
    )
}