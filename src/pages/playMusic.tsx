import HeaderNav from "@/components/navigation/HeaderNav";
import styles from '../styles/PlayMusic.module.css'
import Image from "next/image";
import Head from 'next/head'
import { useEffect, useState } from "react";
import { getArt } from "@/hooks/getArt";
import Carousel from "nuka-carousel";

export default function PlayMusic() {

    enum ArtUntitled {
        Untitled = "Untitled", // Untitled
        Mural = "Untitled (Mural)", // Untitled (Mural)
        Hundred = "Untitled (100)", // Untitled (100)
        Fountain = "Untitled (fountain)", // Untitled (fountain)
    }

    const [data, setData] = useState<PublicArt[]>([]);
    const [headerTitle, setHeadertitle] = useState<string>(`Captain George Vancouver`)

    useEffect(() => {
        const fetchArt = async () => {
            const data = await getArt();
            setData(data)
        }
        fetchArt()

    }, [])

    const changeSlideHeader = (slideIndex: number) => {
        setHeadertitle(data[slideIndex].title_of_work)
    }

    return (
        <main className={`bg-battleshipGray min-h-screen`} >
            <Head>
                <title>Now Playing | Amplify</title>
            </Head>

            <HeaderNav text="Now Playing" type="simple-music" />
            <div id="mainContainer" className={`flex flex-col`}>

                <Carousel style={{ marginBottom: "100px" }}
                    // renderCenterLeftControls={() => null}
                    // renderCenterRightControls={() => null}
                    renderBottomCenterControls={() => null}
                    afterSlide={changeSlideHeader}
                >
                    {
                        data && data.map((a, aIndex) => {
                            return (
                                <div key={aIndex} className={styles.slideContainer}>
                                    <Image
                                        key={aIndex}
                                        src={`/PublicArt/img${aIndex + 1}.jpg`}
                                        width={500}
                                        height={300}
                                        alt={a.title_of_work}
                                        style={{
                                            width: "500px",
                                            height: "300px"
                                        }}
                                    />
                                    {
                                        a.title_of_work == ArtUntitled.Untitled ||
                                            a.title_of_work == ArtUntitled.Mural ||
                                            a.title_of_work == ArtUntitled.Hundred ||
                                            a.title_of_work == ArtUntitled.Fountain ? <p>No Title</p>
                                            :
                                            <p>TITLE: {a.title_of_work}</p>
                                    }
                                    <p className={styles.neighbourhood}><span>Neighbourhood: </span>{a.neighbourhood}</p>
                                    <p className={styles.year}><span>Year of Installation: </span>{a.yearofinstallation}</p>
                                    <p className={styles.status}><span>Status: </span>{a.status}</p>
                                    {
                                        a.artistprojectstatement == null ? <></> : <p>{a.artistprojectstatement.substring(0, 500)}</p>
                                    }
                                </div>
                            )

                        })
                    }
                </Carousel>

            </div>
        </main>
    )
}
