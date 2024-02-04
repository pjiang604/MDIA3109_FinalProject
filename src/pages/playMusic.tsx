import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import { useEffect, useState } from "react";

import useRefreshToken from "@/hooks/useRefreshToken";
import { useRouter } from "next/router";


export default function PlayMusic() {

  const clientID: string = `${process.env.NEXT_PUBLIC_CLIENT_ID}`
  const clientSecret: string = `${process.env.NEXT_PUBLIC_CLIENT_SECRET}`

  return (
    <main className={``} >
            <HeaderNav text="Now Playing" type="simple-music" />
      <div id="mainContainer" className={`flex flex-col`}>
        <p>{clientID}</p>
        <p>{clientSecret}</p>


      </div>
      <Nav type="music"/>
    </main>
  )
}
