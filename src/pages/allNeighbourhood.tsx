import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import Playlist from "@/components/buttons/Playlist";
import { neighbourhoods } from "@/data/neighbourhoods";
import { useState } from "react";


export default function AllNeighbourhood() {

  const [dataNeigh, setdataNeigh] = useState(neighbourhoods)
  return (
    <main className={``} >
      <HeaderNav text="Art Based on Neighbourhood" type="simple-backBtn" />
      <div id="mainContainer" className={`flex flex-row gap-4 flex-wrap `}>
        {
          dataNeigh && dataNeigh.map((n, nIndex) => {
            return (
              <Playlist
                key={nIndex}
                name={n.name}
                image={n.image}
              />
            )
          })
        }

      </div>
      <Nav type="music" />
    </main>
  )
}
