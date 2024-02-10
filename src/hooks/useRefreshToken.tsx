import { useEffect, useState } from "react";
import { getToken, refreshSpotifyToken } from "@/pages/api/authorize";

export default function useRefreshToken(code: string) {
    const [expiresIn, setExpiresIn] = useState(0);
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");

    const fetchToken = async () => {
        let response = await getToken(code);

        if (response.access_token && response.refresh_token && response.expires_in) {
            console.log("Token Response", response)
            setAccessToken(response.access_token);
            setRefreshToken(response.refresh_token);
            setExpiresIn(response.expires_in);
            localStorage.setItem("access_token", response.access_token);
        } else {
            console.error("Token error", response);
        }
    };

    const refreshTokenFn = async () => {
        let response = await refreshSpotifyToken(refreshToken);
        setAccessToken(response.access_token);
        setExpiresIn(response.expires_in);
        localStorage.setItem("access_token", response.access_token);
    };

    useEffect(() => {
        fetchToken();
    }, [code]);

    useEffect(() => {
        if (!refreshToken || !expiresIn) return;

        const interval = setInterval(() => {
            refreshTokenFn();
        }, (expiresIn - 60) * 1000);

        return () => clearInterval(interval);
    }, [refreshToken, expiresIn]);
}