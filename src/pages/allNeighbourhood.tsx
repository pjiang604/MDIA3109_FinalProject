import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import Playlist from "@/components/buttons/Playlist";
import { neighbourhoods } from "@/data/neighbourhoods";
import { useState } from "react";
import Head from 'next/head'

export default function AllNeighbourhood() {
  const [dataNeigh, setdataNeigh] = useState(neighbourhoods);
  
  return (
    <main>
      <Head>
        <title>Art Based on Neighbourhood</title>
      </Head>
      <HeaderNav text="Art Based on Neighbourhood" type="simple-backBtn" />
      <div className="text-center">
        <div id="mainContainer" className="flex flex-row flex-wrap gap-4 justify-center">
          {dataNeigh.map((neighbourhood, index) => (
            <Playlist
              key={index}
              name={neighbourhood.name}
              image={neighbourhood.image}
            />
          ))}
        </div>
      </div>
      <Nav type="music" />
    </main>
  );
}
