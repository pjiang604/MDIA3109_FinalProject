
import HeaderNav from "@/components/navigation/HeaderNav"
import styles from '../styles/Charts.module.css'
import Head from 'next/head'
import SalesBar from "@/components/Charts/SalesBar"
import ArtistPie from "@/components/Charts/ArtistPie"




export default function Charts() {




  return (
    <>
      <main className={`flex-1`}>
        <Head>
          <title>Learn More | Amplify</title>
        </Head>
        <HeaderNav text="Learn More" type="simple-backBtn" />
        <div id="mainContainer" className={`flex flex-col`}>
          <SalesBar />
          <ArtistPie />
        </div>

      </main>
    </>

  )
}
