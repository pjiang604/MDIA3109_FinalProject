const clientID: string = `${process.env.NEXT_PUBLIC_CLIENT_ID}`
const clientSecret: string = `${process.env.NEXT_PUBLIC_CLIENT_SECRET}`

const redirectUri: string = "http://localhost:3000/home";
const BASEURL = `https://accounts.spotify.com/api`

function generateRandomString(length: number): string {
    let text = "";
    const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier: string): Promise<string> {
    function base64encode(string: Uint8Array): string {
        return btoa(String.fromCharCode.apply(null, Array.from(string)))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=+$/, "");
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest("SHA-256", data);

    return base64encode(new Uint8Array(digest));
}

const codeVerifier: string = generateRandomString(128);

let urlParams = new URLSearchParams();

if (typeof window !== "undefined") {
    urlParams = new URLSearchParams(window.location.search);
}

export const authorize = async () => {
    generateCodeChallenge(codeVerifier).then((codeChallenge) => {
        const state: string = generateRandomString(16);
        const scope: string =
            "user-read-private user-read-email streaming user-read-playback-state user-modify-playback-state user-read-recently-played";

        localStorage.setItem("code_verifier", codeVerifier);

        const args = new URLSearchParams({
            response_type: "code",
            client_id: clientID,
            scope: scope,
            redirect_uri: redirectUri,
            state: state,
            code_challenge_method: "S256",
            code_challenge: codeChallenge,
        });

        window.location.href = "https://accounts.spotify.com/authorize?" + args;
    });

};

export const getToken = async (code: string) => {
    const codeVerifier = localStorage.getItem("code_verifier");

    const body = new URLSearchParams({
        grant_type: "authorization_code" || "",
        code: code || "",
        redirect_uri: redirectUri || "",
        client_id: clientID || "",
        code_verifier: codeVerifier || "",
    });
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: body,
        });
        return response.json();

    } catch (error) {
        window.location.href = "/";
    }
};


export const refreshSpotifyToken = async (refresh_token: string) => {
    const body = new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token,
        client_id: clientID || "",
    });
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: body,
        });

        return response.json();
    } catch (err) {
        console.log(err);
    }
};