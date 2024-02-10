import { useState } from "react"

const playlist_id = `1Wz0l2ey9V1uFf7pEfmh20`
let accessToken = localStorage.getItem('access_token');

export const getPlaylist = async () => {
    try{

        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        });
        const playlistData = await response.json();
        // console.log('Playlist data: ', playlistData);

        return playlistData;
    }catch (error) {
        console.error('Playlist error: ', error);
    }
}

export const playSong = async () => {
    try{

        const response = await fetch(`https://api.spotify.com/v1/me/player/play`, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        });
        const playlistData = await response.json();
        // console.log('Playlist data: ', playlistData);

        return playlistData;
    }catch (error) {
        console.error('Playlist error: ', error);
    }
}