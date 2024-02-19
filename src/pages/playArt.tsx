import MusicAndArtCarousel from "@/components/carousel/MusicAndArtCarousel"
import Nav from "@/components/navigation/NavBar"
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function PlayArt() {
  // main had className flex min-h-screen flex-col items-center justify-between p-24

  // const [data, setData] = useState<StreetArt[]>([]);

  // const url = "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/public-art/records?limit=20"

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get(url);
  //     console.log("response.data", response.data.results)
  //     setData(response.data.results);
  //   }

  //   getData()

  //   .catch(console.error);
  // },[])

  return (
    <main className={``} >
      <div id="mainContainer" className={`flex flex-col`}>
        <MusicAndArtCarousel></MusicAndArtCarousel>
      </div>
      <Nav type="art" />
      {/* <div>
        {
          data && data.map((d, index) => {

            return (
              <div key={index}>
                { 
                  d.title_of_work == "Untitled" ? <p>No Title</p> :
                  d.title_of_work == "Untitled (Mural)" ? <p>No Title</p> :
                  d.title_of_work == "Untitled (100)" ? <p>No Title</p> :
                  d.title_of_work == "Untitled (fountain)" ? <p>No Title</p> :
                  <p>TITLE: {d.title_of_work}</p> 
                }
                <p>Neighbourhood: {d.neighbourhood}</p>
                <p>Year of Installation: {d.yearofinstallation}</p>
              </div>
            )
          })
        }
      </div> */}
    </main>
  )
}
