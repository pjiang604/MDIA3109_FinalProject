import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Carousel from 'nuka-carousel';
import styles from "@/styles/PlayArt.module.css"

// Components
import Nav from "@/components/navigation/NavBar"

export default function PlayArt() {

  const [data, setData] = useState<PublicArt[]>([]);

  const url = "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/public-art/records?limit=23"

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      console.log("response.data", response.data.results)
      setData(response.data.results);
    }

    getData()

    .catch(console.error);
  },[]);

  return (
    <main className={``} >
      <Nav type="art" />
      <Carousel style={{marginBottom: "100px"}}
        // renderCenterLeftControls={() => null}
        // renderCenterRightControls={() => null}
        renderBottomCenterControls={() => null}
      >
        {
          data && data.map((d, index) => {
            return (
              <div key={index} className={styles.slideContainer}>
                <Image 
                  src={`/PublicArt/img${index+1}.jpg`}
                  width={500}
                  height={300}
                  alt={d.title_of_work}
                  style={{
                    width: "500px",
                    height: "300px"
                  }}
                />
                { 
                  d.title_of_work == "Untitled" ? <p>No Title</p> :
                  d.title_of_work == "Untitled (Mural)" ? <p>No Title</p> :
                  d.title_of_work == "Untitled (100)" ? <p>No Title</p> :
                  d.title_of_work == "Untitled (fountain)" ? <p>No Title</p> :
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
    </main>
  )
}
