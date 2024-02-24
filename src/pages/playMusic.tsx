import HeaderNav from "@/components/navigation/HeaderNav";
import styles from '../styles/PlayMusic.module.css'
import Head from 'next/head'


export default function PlayMusic() {

    return (
        <main className={`bg-battleshipGray min-h-screen`} >
            <Head>
                <title>Now Playing | Amplify</title>
            </Head>
            <HeaderNav text="Now Playing" type="simple-music" />
            <div id="mainContainer" className={`flex flex-col`}>
               
            </div>
        </main>
    )
}
