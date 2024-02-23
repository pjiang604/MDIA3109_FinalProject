import HeaderNav from "@/components/navigation/HeaderNav";
import Nav from "@/components/navigation/NavBar";
import useRefreshToken from "@/hooks/useRefreshToken";
import Head from 'next/head'

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { authorize, getToken } from "./api/authorize";

export default function SpotifyLogin() {

    const [accessToken, setAccessToken] = useState("");
    const [codeVerifier, setCodeVerifier] = useState('')


    const router = useRouter();
    const code = router.query.code;

    useRefreshToken(code as string);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            setAccessToken(`${localStorage.getItem("access_token")}`)
        } else {
            console.log("play music page: local storage undefined")
        }
    }, [authorize])

    useEffect(() => {
        console.log(accessToken, "access token");
    }, [accessToken]);

    return (
        <main className={``} >

            <div id="mainContainer" className={`flex flex-col`}>
            <Head>
                <title>Spotify Login | Amplify</title>
            </Head>
                <p>Dev note: if you're not working on spotify, just type in /home in the url to bypass this</p>
                <button onClick={authorize} className={`bg-rose-900	text-white flex w-full content-center justify-center py-4 rounded-xl`}>Authorize</button>




            </div>
        </main>
    )
}