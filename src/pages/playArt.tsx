import { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from 'nuka-carousel';
import styles from "@/styles/PlayArt.module.css"
import Head from 'next/head'
import { GoChevronLeft , GoChevronRight} from "react-icons/go";

// Components
import HeaderNav from "@/components/navigation/HeaderNav";

// Hook
import { getArt } from "@/hooks/getArt";

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
    <main className={`flex-1`} >
      <Head>
        <title>Art | Amplify</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.title}>
          <HeaderNav type="simple-backBtn" text={headerTitle} />
        </div>
        <div className={styles.mainContainer}>
          <Carousel
            renderBottomCenterControls={() => null}
            renderCenterLeftControls={({ previousSlide }) => (
              <button onClick={previousSlide}>
                <p className={styles.carouselButtonLeft}><GoChevronLeft/></p>
              </button>
            )}
            renderCenterRightControls= {({ nextSlide }) => (
              <button onClick={nextSlide}>
                <p className={styles.carouselButtonRight}><GoChevronRight /></p>
              </button>
            )}
            afterSlide={changeSlideHeader}
            className={styles.carouselContainer}
          >
            {
              data && data.map((d, index) => {
                return (
                  <div key={index} className={styles.slideContainer}>
                    <Image
                      className={styles.carouselImages}
                      src={`/PublicArt/img${index + 1}.jpg`}
                      height={500}
                      width={850}
                      alt={d.title_of_work}
                    />
                    <div >
                    <p className={styles.neighbourhood}><b>Neighbourhood: </b>{d.neighbourhood}</p>
                    <p className={styles.year}><b>Year of Installation: </b>{d.yearofinstallation}</p>
                    <p className={styles.status}><b>Status: </b>{d.status}</p>
                    </div>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
      </div>
    </main>
  )
}

