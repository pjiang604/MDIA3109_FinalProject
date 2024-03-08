
import HeaderNav from "@/components/navigation/HeaderNav"
import styles from '../styles/Charts.module.css'
import Head from 'next/head'
import SalesBar from "@/components/Charts/SalesBar"
import ArtistPie from "@/components/Charts/ArtistPie"

export default function Charts() {

  return (
    <main className={styles.main}>
      <Head>
        <title>Learn More | Amplify</title>
      </Head>
      <div className={styles.title}>
        <HeaderNav text="Learn More" type="simple-backBtn" />
      </div>
      <div id="mainContainer" className={styles.mainContainer}>
        <SalesBar />
        <ArtistPie />
      </div>
    </main>
  )
}
