import { useState } from "react"



export const getPlaylist = async (playlist_id: string) => {
    try{
        let accessToken = localStorage.getItem('access_token');
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        });
        const playlistData = await response.json();
        console.log('Playlist data: ', playlistData);

        return playlistData;
    }catch (error) {
        console.error('Playlist error: ', error);
    }
}

export const playSong = async () => {
    try{

        let accessToken = localStorage.getItem('access_token');
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