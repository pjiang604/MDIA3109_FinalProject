import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import styles from './Playlist.module.css'

export default function Playlist({
    name,
    image
}: IPlaylist) {



    return (
        <Link href={`/neighbourhood/${name}`}>
            <div className={`relative h-full bg-zinc-400 px-2 pt-3 pb-5 rounded-md`}>
                <div className={`relative flex justify-center items-center`}>
                    <h2 className={`z-10 absolute text-[#f8fafc] font-bold text-xl`}>{name}</h2>

                    <Image
                        className={styles.carouselImage}
                        src={image}
                        width={140}
                        height={140}
                        alt="neighbourhood"
                        />

                </div>
                <div className={`flex text-center justify-center`}>
                    <p className={`font-medium uppercase text-sm bg-zinc-400 mt-5`}>20 songs · 57 mins</p>
                </div>
            </div>
        </Link>
    )
}