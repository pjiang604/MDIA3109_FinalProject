import { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from 'nuka-carousel';
import styles from "@/styles/PlayArt.module.css"
import Head from 'next/head'
import { getArt } from "@/hooks/getArt";

// Components
import HeaderNav from "@/components/navigation/HeaderNav";

enum ArtUntitled {
  Untitled = "Untitled", // Untitled
  Mural = "Untitled (Mural)", // Untitled (Mural)
  Hundred = "Untitled (100)", // Untitled (100)
  Fountain = "Untitled (fountain)", // Untitled (fountain)
}

export default function PlayArt() {

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
    <main className={``} >
      <Head>
        <title>Art | Amplify</title>
      </Head>
      <HeaderNav
        type="simple-backBtn"
        text={headerTitle} />
      <div className={`flex flex-col`}>
        <Carousel style={{ /*marginBottom: "100px"*/ }}
          // renderCenterLeftControls={() => null}
          // renderCenterRightControls={() => null}
          renderBottomCenterControls={() => null}
          afterSlide={changeSlideHeader}
        >
          {
            data && data.map((d, index) => {
              return (
                <div key={index} className={styles.slideContainer}>
                  <Image
                    src={`/PublicArt/img${index + 1}.jpg`}
                    width={500}
                    height={300}
                    alt={d.title_of_work}
                    style={{
                      width: "500px",
                      height: "300px"
                    }}
                  />
                  {
                    d.title_of_work == ArtUntitled.Untitled ||
                      d.title_of_work == ArtUntitled.Mural ||
                      d.title_of_work == ArtUntitled.Hundred ||
                      d.title_of_work == ArtUntitled.Fountain ? <p>No Title</p>
                      :
                      <p>TITLE: {d.title_of_work}</p>
                  }
                  <p>Neighbourhood: {d.neighbourhood}</p>
                  <p>Year of Installation: {d.yearofinstallation}</p>
                  <p>Status: {d.status}</p>
                  {
                    d.artistprojectstatement == null ? <></> : <p>{d.artistprojectstatement.substring(0, 500)}</p>
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
