import { useState } from "react";
import Head from 'next/head';
import styles from "@/styles/AllNeighbourhood.module.css";

// Components
import HeaderNav from "@/components/navigation/HeaderNav";
import Playlist from "@/components/buttons/Playlist";

// Data
import { neighbourhoods } from "@/data/neighbourhoods";

export default function AllNeighbourhood() {
  const [dataNeigh, setDataNeigh] = useState(neighbourhoods);
  
  return (
    <main className={styles.container}>
      <Head>
        <title>Art Based on Neighbourhood</title>
      </Head>
      <HeaderNav text="Art Based on Neighbourhood" type="simple-backBtn" />
      <div id="mainContainer" className={styles.cardContainer}>
        {dataNeigh.map((neighbourhood, index) => (
          <Playlist
            key={index}
            name={neighbourhood.name}
            image={neighbourhood.image}
          />
        ))}
      </div>
    </main>
  );
}
